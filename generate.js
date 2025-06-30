const fs = require("fs");

const TOTAL_BLOCKS = 100;
const grid = [];

for (let i = 0; i < TOTAL_BLOCKS; i++) {
  grid.push({ index: i, dugBy: null });
}

const data = { grid };

fs.writeFileSync("grid.json", JSON.stringify(data, null, 2));
console.log("✅ grid.json oluşturuldu.");
