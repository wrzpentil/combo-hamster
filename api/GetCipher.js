const express = require("express");
const app = express();

app.get("/api/getCombo", (req, res) => {
  const cipherData = {
    cipher: ["STAKE"],
  };
  res.json(cipherData);
});

module.exports = app;
