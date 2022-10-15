const express = require("express");
const app = express();
const ejs = require("ejs");
const router = require("./routes/routes");

app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.use(express());
app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: true }));
app.use(router);
app.use("/*", (_, res) => res.sendStatus(404));

app.listen(7777, console.log(7777));
