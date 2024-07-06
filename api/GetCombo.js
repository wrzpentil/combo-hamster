const express = require("express");
const app = express();

app.get("/api/GetCombo", (req, res) => {
  const comboData = {
    combo: ["staking", "licence_europe", "quaterfinal_are_coming"],
  };
  res.json(comboData);
});

module.exports = app;
