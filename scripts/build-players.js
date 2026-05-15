#!/usr/bin/env node
/**
 * Turn a spreadsheet export (CSV) into data/players.json for the website.
 *
 * Usage:
 *   node scripts/build-players.js
 *   node scripts/build-players.js path/to/your-export.csv
 *
 * CSV must have a header row. Required column: name
 * Optional: pos, nfl, age, si, pff, espn, ktc, pfn, ftn, gen, ktc2, ffc, df, rb, ffa, sleeper
 * Empty cells = that site has no rank for that player.
 * Averages use scripts/rank-sources.js (includes optional auto sleeper from daily job).
 */
const fs = require("fs");
const path = require("path");
const { RANK_SOURCES, recomputeAverages, normalizeName } = require("./rank-sources");

const ROOT = path.join(__dirname, "..");
const defaultCsv = path.join(ROOT, "data", "sheet-export.csv");
const outFile = path.join(ROOT, "data", "players.json");

function parseCsv(text) {
  const rows = [];
  let row = [];
  let cell = "";
  let inQuotes = false;
  for (let i = 0; i < text.length; i++) {
    const ch = text[i];
    const next = text[i + 1];
    if (inQuotes) {
      if (ch === '"' && next === '"') {
        cell += '"';
        i++;
      } else if (ch === '"') inQuotes = false;
      else cell += ch;
    } else if (ch === '"') inQuotes = true;
    else if (ch === ",") {
      row.push(cell.trim());
      cell = "";
    } else if (ch === "\n" || ch === "\r") {
      if (ch === "\r" && next === "\n") i++;
      row.push(cell.trim());
      if (row.some((c) => c !== "")) rows.push(row);
      row = [];
      cell = "";
    } else cell += ch;
  }
  row.push(cell.trim());
  if (row.some((c) => c !== "")) rows.push(row);
  return rows;
}

function num(v) {
  if (v == null || v === "") return null;
  const n = Number(v);
  return Number.isFinite(n) && n > 0 ? n : null;
}

function loadPreviousSleeperByName() {
  const m = new Map();
  if (!fs.existsSync(outFile)) return m;
  try {
    const prev = JSON.parse(fs.readFileSync(outFile, "utf8"));
    for (const p of prev.players || []) {
      if (p.sleeper != null && Number(p.sleeper) > 0) m.set(normalizeName(p.name), Number(p.sleeper));
    }
  } catch (_) {}
  return m;
}

function main() {
  const csvPath = process.argv[2] || defaultCsv;
  if (!fs.existsSync(csvPath)) {
    console.error("CSV not found:", csvPath);
    console.error("Export your Google Sheet as CSV to data/sheet-export.csv, then run again.");
    process.exit(1);
  }
  const rows = parseCsv(fs.readFileSync(csvPath, "utf8"));
  if (rows.length < 2) {
    console.error("CSV needs a header row and at least one player.");
    process.exit(1);
  }
  const headers = rows[0].map((h) => h.toLowerCase().replace(/\s+/g, ""));
  const idx = (name) => headers.indexOf(name);

  const players = [];
  const prevSleeper = loadPreviousSleeperByName();

  for (let r = 1; r < rows.length; r++) {
    const cols = rows[r];
    const name = cols[idx("name")];
    if (!name) continue;
    const p = {
      name,
      pos: cols[idx("pos")] || "WR",
      nfl: cols[idx("nfl")] || cols[idx("team")] || "",
      age: num(cols[idx("age")]) || 25,
    };
    RANK_SOURCES.forEach((src) => {
      const i = idx(src);
      if (i >= 0) p[src] = num(cols[i]);
    });
    const slp = prevSleeper.get(normalizeName(p.name));
    if (slp != null && (p.sleeper == null || p.sleeper === "")) p.sleeper = slp;
    players.push(p);
  }

  recomputeAverages(players);

  const out = {
    updatedAt: new Date().toISOString().slice(0, 10),
    sourceNote: "Built from spreadsheet CSV via scripts/build-players.js",
    players,
  };
  fs.writeFileSync(outFile, JSON.stringify(out, null, 2));
  console.log("Wrote", players.length, "players to", outFile);
}

main();
