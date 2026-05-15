#!/usr/bin/env node
/**
 * Rebuilds data/players.json from the Google Sheet CSV export (manual ranks only).
 *
 * Usage:
 *   node scripts/build-players.js
 *   node scripts/build-players.js path/to/your-export.csv
 */
const fs = require("fs");
const path = require("path");
const { RANK_SOURCES, recomputeAverages } = require("./rank-sources");

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

function csvRowsToPlayers(rows) {
  const headers = rows[0].map((h) => h.toLowerCase().replace(/\s+/g, ""));
  const idx = (name) => headers.indexOf(name);
  const players = [];
  for (let r = 1; r < rows.length; r++) {
    const cols = rows[r];
    const name = cols[idx("name")];
    if (!name) continue;
    const p = { name: name.trim() };
    const pi = idx("pos");
    if (pi >= 0 && cols[pi]) p.pos = cols[pi];
    const ni = idx("nfl");
    if (ni >= 0 && cols[ni]) p.nfl = cols[ni];
    const ti = idx("team");
    if (ti >= 0 && cols[ti] && !p.nfl) p.nfl = cols[ti];
    const ai = idx("age");
    if (ai >= 0) {
      const a = num(cols[ai]);
      if (a != null) p.age = a;
    }
    for (const k of RANK_SOURCES) {
      const i = idx(k);
      if (i >= 0) {
        const v = num(cols[i]);
        if (v != null) p[k] = v;
      }
    }
    players.push(p);
  }
  return players;
}

function main() {
  const csvPath = process.argv[2] || defaultCsv;
  if (!fs.existsSync(csvPath)) {
    console.error("CSV not found:", csvPath);
    process.exit(1);
  }
  const rows = parseCsv(fs.readFileSync(csvPath, "utf8"));
  if (rows.length < 2) {
    console.error("CSV needs a header row.");
    process.exit(1);
  }
  const players = csvRowsToPlayers(rows);
  recomputeAverages(players);

  const out = {
    updatedAt: new Date().toISOString().slice(0, 10),
    sourceNote: "Google Sheet export (manual ranks) via scripts/build-players.js",
    players,
  };
  fs.writeFileSync(outFile, JSON.stringify(out, null, 2));
  console.log("Wrote", players.length, "players from", csvPath);
}

main();
