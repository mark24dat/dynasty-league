/**
 * Single manual ranking column from the Google Sheet export.
 */
const RANK_COLUMN = "rank";

function recomputeRanks(players) {
  for (const p of players) {
    const rank = p.manualRank ?? p.rank ?? p.avgRank;
    if (rank != null && Number(rank) > 0) {
      p.manualRank = Number(rank);
      p.avgRank = Number(rank);
      p.nsrc = 1;
    } else {
      delete p.manualRank;
      delete p.nsrc;
      delete p.avgRank;
    }
  }
  players.sort((a, b) => (a.avgRank ?? 999) - (b.avgRank ?? 999));
}

module.exports = { RANK_COLUMN, recomputeRanks };
