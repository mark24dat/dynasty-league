/**
 * Sleeper NFL player pool — top N by search_rank (lower = higher on Sleeper).
 */
const { normalizeName } = require("./rank-sources");

const TOP_N_DEFAULT = 500;

function sleeperFullName(p) {
  const a = (p.first_name || "").trim();
  const b = (p.last_name || "").trim();
  return [a, b].filter(Boolean).join(" ").trim();
}

async function fetchTopSleeperPlayers(limit = TOP_N_DEFAULT) {
  const res = await fetch("https://api.sleeper.app/v1/players/nfl");
  if (!res.ok) throw new Error("Sleeper API " + res.status);
  const data = await res.json();
  const rows = [];
  for (const p of Object.values(data)) {
    if (!p || p.sport !== "nfl") continue;
    const pos = p.position;
    if (!["QB", "RB", "WR", "TE", "K", "DEF"].includes(pos)) continue;
    const rank = Number(p.search_rank);
    if (!rank || rank <= 0) continue;
    const name = sleeperFullName(p);
    if (!name) continue;
    const age = parseInt(p.age, 10);
    rows.push({
      rank,
      name,
      pos,
      nfl: (p.team || "FA").toString().toUpperCase() || "FA",
      age: Number.isFinite(age) && age > 0 ? age : 25,
      sleeper: rank,
    });
  }
  rows.sort((a, b) => a.rank - b.rank);
  const seen = new Set();
  const out = [];
  for (const r of rows) {
    const key = normalizeName(r.name);
    if (!key || seen.has(key)) continue;
    seen.add(key);
    out.push({
      name: r.name,
      pos: r.pos,
      nfl: r.nfl,
      age: r.age,
      sleeper: r.sleeper,
    });
    if (out.length >= limit) break;
  }
  return out;
}

module.exports = { fetchTopSleeperPlayers, TOP_N_DEFAULT };
