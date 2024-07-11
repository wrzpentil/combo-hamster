const express = require("express");
const app = express();

app.get("/api/GetCombo", (req, res) => {
  const comboData = {
    combo: ["hamster_youtube_gold_butto", "medium", "vesting_smartcontracts"],
  };
  res.json(comboData);
});

module.exports = app;
