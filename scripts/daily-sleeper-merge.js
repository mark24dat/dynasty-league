#!/usr/bin/env node
/**
 * Rebuilds data/players.json from Sleeper top 500 (search_rank) + manual ranks
 * preserved from the previous file when names match.
 *
 * Run: node scripts/daily-sleeper-merge.js
 */
const fs = require("fs");
const path = require("path");
const { recomputeAverages, normalizeName, MANUAL_RANK_KEYS } = require("./rank-sources");
const { fetchTopSleeperPlayers, TOP_N_DEFAULT } = require("./sleeper-top500");

const ROOT = path.join(__dirname, "..");
const PLAYERS_PATH = path.join(ROOT, "data", "players.json");

function extractManualOverlay(players) {
  const m = new Map();
  for (const p of players || []) {
    const o = {};
    for (const k of MANUAL_RANK_KEYS) {
      if (p[k] != null && Number(p[k]) > 0) o[k] = Number(p[k]);
    }
    if (Object.keys(o).length === 0) continue;
    if (p.pos) o._pos = p.pos;
    if (p.nfl) o._nfl = p.nfl;
    if (p.age) o._age = p.age;
    m.set(normalizeName(p.name), o);
  }
  return m;
}

function applyOverlay(player, overlayMap) {
  const o = overlayMap.get(normalizeName(player.name));
  if (!o) return;
  for (const k of MANUAL_RANK_KEYS) {
    if (o[k] != null) player[k] = o[k];
  }
  if (o._pos) player.pos = o._pos;
  if (o._nfl) player.nfl = o._nfl;
  if (o._age != null) player.age = o._age;
}

async function main() {
  let overlay = new Map();
  if (fs.existsSync(PLAYERS_PATH)) {
    try {
      const prev = JSON.parse(fs.readFileSync(PLAYERS_PATH, "utf8"));
      overlay = extractManualOverlay(prev.players);
    } catch (_) {}
  }

  const players = await fetchTopSleeperPlayers(TOP_N_DEFAULT);
  for (const p of players) applyOverlay(p, overlay);

  recomputeAverages(players);

  const out = {
    updatedAt: new Date().toISOString().slice(0, 10),
    sourceNote: `Top ${TOP_N_DEFAULT} NFL players by Sleeper search_rank + merged manual ranks. See scripts/daily-sleeper-merge.js`,
    players,
  };
  fs.writeFileSync(PLAYERS_PATH, JSON.stringify(out, null, 2));
  console.log("Wrote", players.length, "players · manual overlays:", overlay.size);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
