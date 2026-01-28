const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello from ECS via GitHub Actions 🚀");
});

app.listen(3000, () => {
  console.log("Deployed automatically via GitHub Actions 🚀");
});
