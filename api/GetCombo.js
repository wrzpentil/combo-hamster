const express = require("express");
const app = express();

app.get("/api/GetCombo", (req, res) => {
  const comboData = {
    combo: ["sports_integration_1407", "anti_money_loundering", "youtube"],
  };
  res.json(comboData);
});

module.exports = app;
