#!/usr/bin/env node
/**
 * Pulls rosters + team names from ESPN Fantasy (NFL) and writes data/league-espn.json
 * for the static site to load.
 *
 * Reads: data/espn-config.json  → leagueId, season, enabled
 * Optional env (private leagues): ESPN_S2, SWID
 *
 * Usage: node scripts/fetch-espn-league.js
 */
const fs = require("fs");
const https = require("https");
const path = require("path");

const ROOT = path.join(__dirname, "..");
const CONFIG_PATH = path.join(ROOT, "data", "espn-config.json");
const OUT_PATH = path.join(ROOT, "data", "league-espn.json");

const POS_BY_DEFAULT_ID = {
  0: "QB",
  2: "RB",
  4: "WR",
  6: "TE",
  16: "DEF",
  17: "K",
};

function posFromPlayer(p) {
  if (!p) return "WR";
  const abbr = String(p.position || "").toUpperCase();
  if (["QB", "RB", "WR", "TE", "K"].includes(abbr)) return abbr;
  if (abbr === "DST" || abbr === "DEF" || abbr === "D/ST") return "DEF";
  const id = p.defaultPositionId;
  if (POS_BY_DEFAULT_ID[id]) return POS_BY_DEFAULT_ID[id];
  return "WR";
}

function teamDisplayName(team) {
  const loc = (team.location || "").trim();
  const nick = (team.nickname || "").trim();
  const joined = [loc, nick].filter(Boolean).join(" ").trim();
  if (joined) return joined;
  if (team.name) return String(team.name);
  return `Team ${team.id}`;
}

function httpGetJson(url, headers = {}) {
  return new Promise((resolve, reject) => {
    const opts = new URL(url);
    const req = {
      hostname: opts.hostname,
      path: opts.pathname + opts.search,
      method: "GET",
      headers: {
        "User-Agent": "Mozilla/5.0 (compatible; DynastyCentral/1.0)",
        Accept: "application/json",
        ...headers,
      },
    };
    https
      .get(req, (res) => {
        const chunks = [];
        res.on("data", (c) => chunks.push(c));
        res.on("end", () => {
          const body = Buffer.concat(chunks).toString("utf8");
          if (res.statusCode !== 200) {
            reject(new Error(`HTTP ${res.statusCode}: ${body.slice(0, 200)}`));
            return;
          }
          try {
            resolve(JSON.parse(body));
          } catch (e) {
            reject(new Error("Invalid JSON from ESPN"));
          }
        });
      })
      .on("error", reject);
  });
}

function parseLeaguePayload(data) {
  const raw = data.teams;
  const teamList = Array.isArray(raw) ? raw : raw ? Object.values(raw) : [];
  const teams = {};

  for (const team of teamList) {
    if (!team || team.id == null) continue;
    const key = `t${team.id}`;
    const roster = [];
    const entries = team.roster && team.roster.entries ? team.roster.entries : [];
    for (const ent of entries) {
      const pid = ent.playerId || ent.player?.id;
      const pool = ent.playerPoolEntry || ent.player;
      const player = pool && pool.player ? pool.player : pool;
      if (!player || !player.fullName) continue;
      if (!pid || pid === 0) continue;
      roster.push({
        name: player.fullName,
        pos: posFromPlayer(player),
      });
    }
    teams[key] = {
      name: teamDisplayName(team),
      roster,
    };
  }
  return teams;
}

async function main() {
  if (!fs.existsSync(CONFIG_PATH)) {
    console.error("Missing", CONFIG_PATH);
    process.exit(1);
  }
  const cfg = JSON.parse(fs.readFileSync(CONFIG_PATH, "utf8"));
  if (!cfg.enabled) {
    console.log("espn-config.json has enabled: false — skipping ESPN fetch.");
    process.exit(0);
  }
  const leagueId = cfg.leagueId;
  const season = cfg.season || new Date().getFullYear();
  if (!leagueId) {
    console.error("Set leagueId in data/espn-config.json");
    process.exit(1);
  }

  const views = ["mTeam", "mRoster", "mSettings"].join("&view=");
  const url = `https://lm-api-reads.fantasy.espn.com/apis/v3/games/ffl/seasons/${season}/segments/0/leagues/${leagueId}?view=${views}`;

  const headers = {};
  const s2 = process.env.ESPN_S2;
  const swid = process.env.SWID;
  if (s2 && swid) {
    const sw = swid.startsWith("{") ? swid : `{${swid}}`;
    headers.Cookie = `espn_s2=${s2}; SWID=${sw}`;
  }

  console.log("Fetching ESPN league", leagueId, "season", season, s2 ? "(private cookies)" : "(public)");
  const data = await httpGetJson(url, headers);
  const teams = parseLeaguePayload(data);
  const keys = Object.keys(teams);
  if (keys.length < 2) {
    console.error("Expected multiple teams, got:", keys.length, data.messages || "");
    process.exit(1);
  }

  const out = {
    updatedAt: new Date().toISOString().slice(0, 10),
    leagueId,
    season,
    teams,
  };
  fs.writeFileSync(OUT_PATH, JSON.stringify(out, null, 2));
  console.log("Wrote", keys.length, "teams to", OUT_PATH);
}

main().catch((e) => {
  console.error(e.message || e);
  process.exit(1);
});
