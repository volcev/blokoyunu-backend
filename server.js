// server.js
const express = require('express');
const fs = require('fs');
const cors = require('cors');
const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

const DB_FILE = './db.json';

function readDB() {
  return JSON.parse(fs.readFileSync(DB_FILE, 'utf8'));
}

function writeDB(data) {
  fs.writeFileSync(DB_FILE, JSON.stringify(data, null, 2));
}

app.get('/grid', (req, res) => {
  const data = readDB();
  res.json(data.grid);
});

app.patch('/grid/:index', (req, res) => {
  const index = parseInt(req.params.index);
  const { dugBy } = req.body;

  const data = readDB();
  if (data.grid[index]) {
    data.grid[index].dugBy = dugBy;
    writeDB(data);
    res.json({ success: true });
  } else {
    res.status(404).json({ error: 'Block not found' });
  }
});

app.listen(PORT, () => {
  console.log(`Custom server running at http://localhost:${PORT}`);
});
