const express = require("express");
const morgan = require("morgan");
const path = require("path");
const csvRouter = require("./csv/csv.router");

const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs"); // register view engine
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => {
  res.render("index");
});

app.use("/upload", csvRouter);

module.exports = app;
