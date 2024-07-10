const express = require("express");
const app = express();

app.get("/api/GetCombo", (req, res) => {
  const comboData = {
    combo: ["oracle", "margin_trading_x30", "sports_integration_1007"],
  };
  res.json(comboData);
});

module.exports = app;
