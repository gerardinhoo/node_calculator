const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/", (req, res) => {
  let numberOne = Number(req.body.numberOne);

  let numberTwo = Number(req.body.numberTwo);
  let result = numberOne + numberTwo;
  res.status(200).send(result.toString());
});

app.listen(3000, () => {
  console.log("App started on 3000");
});
