const express = require("express");
const app = express();

app.get("/api/GetCombo", (req, res) => {
  const comboData = {
    combo: ["staking", "licence_europe", "sports_integration_0707"],
  };
  res.json(comboData);
});

module.exports = app;
