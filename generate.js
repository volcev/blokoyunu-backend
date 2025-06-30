// generate.js
const fs = require("fs");

const TOTAL_BLOCKS = 100;
const grid = [];

for (let i = 0; i < TOTAL_BLOCKS; i++) {
  grid.push({ index: i, dugBy: null });
}

const data = { grid };

// Render ile uyumlu olacak şekilde db.json'a yazıyoruz
fs.writeFileSync("db.json", JSON.stringify(data, null, 2));
console.log("✅ db.json oluşturuldu.");
