#!/usr/bin/env node
/**
 * Free daily signal: Sleeper public NFL players API (search_rank).
 * Merges into data/players.json by player name; re-averages with your manual columns.
 *
 * Run: node scripts/daily-sleeper-merge.js
 * GitHub Actions: .github/workflows/daily-sleeper-ranks.yml
 */
const fs = require("fs");
const path = require("path");
const { recomputeAverages, normalizeName } = require("./rank-sources");

const ROOT = path.join(__dirname, "..");
const PLAYERS_PATH = path.join(ROOT, "data", "players.json");

function sleeperFullName(p) {
  const a = (p.first_name || "").trim();
  const b = (p.last_name || "").trim();
  return [a, b].filter(Boolean).join(" ");
}

async function fetchSleeperRankMap() {
  const res = await fetch("https://api.sleeper.app/v1/players/nfl");
  if (!res.ok) throw new Error("Sleeper API " + res.status);
  const data = await res.json();
  const map = new Map();
  for (const p of Object.values(data)) {
    if (!p || p.sport !== "nfl") continue;
    const pos = p.position;
    if (!["QB", "RB", "WR", "TE", "K", "DEF"].includes(pos)) continue;
    const rank = p.search_rank;
    if (rank == null || Number(rank) <= 0) continue;
    const key = normalizeName(sleeperFullName(p));
    if (!key) continue;
    const prev = map.get(key);
    if (prev == null || Number(rank) < prev) map.set(key, Number(rank));
  }
  return map;
}

async function main() {
  const rankMap = await fetchSleeperRankMap();
  const raw = JSON.parse(fs.readFileSync(PLAYERS_PATH, "utf8"));
  const players = raw.players || [];
  let matched = 0;
  for (const p of players) {
    const key = normalizeName(p.name);
    const r = rankMap.get(key);
    if (r != null) {
      p.sleeper = r;
      matched++;
    } else {
      delete p.sleeper;
    }
  }
  recomputeAverages(players);
  const out = {
    updatedAt: new Date().toISOString().slice(0, 10),
    sourceNote:
      "Sleeper search_rank merged daily (free API) + manual columns from sheet. See scripts/daily-sleeper-merge.js",
    players,
  };
  fs.writeFileSync(PLAYERS_PATH, JSON.stringify(out, null, 2));
  console.log("Updated", players.length, "players · Sleeper matched:", matched);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
