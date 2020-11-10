const express = require("express");

const app = express();
app.listen(3000);

app.use(express.static("public"));

app.get("/", (req, res) => {
  return res.redirect("index.html");
});
