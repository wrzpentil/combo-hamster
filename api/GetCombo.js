const express = require("express");
const app = express();

app.get("/api/GetCombo", (req, res) => {
  const comboData = {
    combo: ["villa_for_dev_team", "youtube_25_million", "test2"],
  };
  res.json(comboData);
});

module.exports = app;
