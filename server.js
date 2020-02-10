const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.listen("3000", () => {
  console.log("App started on 3000");
});
