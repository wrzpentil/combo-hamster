const express = require("express");
const app = express();

app.get("/api/GetCombo", (req, res) => {
  const comboData = {
    combo: ["tg_leaders", "dex", "sports_integration_0907"],
  };
  res.json(comboData);
});

module.exports = app;
