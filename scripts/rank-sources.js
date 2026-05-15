/**
 * Single list of rank columns (manual from sheet + auto Sleeper).
 * Used by build-players.js, daily-sleeper-merge.js, and keep in sync with js/app.js
 */
function normalizeName(s) {
  return String(s || "")
    .toLowerCase()
    .replace(/['.]/g, "")
    .replace(/\b(jr|sr|ii|iii|iv|v)\b/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

const RANK_SOURCES = [
  "si",
  "pff",
  "espn",
  "ktc",
  "pfn",
  "ftn",
  "gen",
  "ktc2",
  "ffc",
  "df",
  "rb",
  "ffa",
  "sleeper",
];

function recomputeAverages(players) {
  for (const p of players) {
    const vals = RANK_SOURCES.map((k) => p[k]).filter((v) => v != null && Number(v) > 0);
    if (vals.length) {
      p.nsrc = vals.length;
      p.avgRank = Math.round((vals.reduce((a, b) => a + Number(b), 0) / vals.length) * 10) / 10;
    } else {
      delete p.nsrc;
      delete p.avgRank;
    }
  }
  players.sort((a, b) => (a.avgRank ?? 999) - (b.avgRank ?? 999));
}

module.exports = { RANK_SOURCES, recomputeAverages, normalizeName };
