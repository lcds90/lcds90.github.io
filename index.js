const express = require("express");
const app = express();
var path = require("path");
const publicDirectory = path.join(__dirname, "public");
var livereload = require("livereload");
var connectLivereload = require("connect-livereload");
var liveReloadServer = livereload.createServer();
require('css.escape');
liveReloadServer.watch(publicDirectory);
liveReloadServer.server.once("connection", () => {
  setTimeout(() => {
    liveReloadServer.refresh("/");
  }, 100);
});
app.use(connectLivereload());

// View engine
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

// Static
app.use(express.static("assets"));

app.get("/", (req, res) => {
  res.render("index");
});

app.listen(3000, () => {
  console.log("O servidor está rodando! http://localhost:3000");
});
