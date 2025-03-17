const express = require("express");
const app = express();
const path = require("path");
const rootDir = require("./util/pathUtil");

app.use(express.static(path.join(rootDir, "public")));
// app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");
app.set("views", "views");

const port = 3001;

app.get("/", (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "home.html"));
});

app.get("/skill", (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "skill.html"));
});

app.listen(port, (err) => {
  console.log(`server run on address http://localhost:${port}`);
  if (err) console.log(err);
});
