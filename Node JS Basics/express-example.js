const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hey we are using express!");
});

app.listen(3000);
