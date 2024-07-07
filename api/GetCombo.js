const express = require("express");
const app = express();

app.get("/api/GetCombo", (req, res) => {
  const comboData = {
    combo: ["ceo", "leaderboards", "nft_collection_launch"],
  };
  res.json(comboData);
});

module.exports = app;
