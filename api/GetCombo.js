const express = require("express");
const app = express();

app.get("/api/GetCombo", (req, res) => {
  const comboData = {
    combo: ["nft_marketplace", "security_team", "prediction_markets"],
  };
  res.json(comboData);
});

module.exports = app;
