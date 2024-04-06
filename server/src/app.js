const express = require("express");
const morgan = require("morgan");
const path = require("path");
const cors = require("cors");
const csvRouter = require("./csv/csv.router");
const corsOptions = require("./config/corsOptions");

const app = express();

app.use(cors(corsOptions));
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs"); // register view engine
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => {
  res.send("csvtojson server is live");
});

app.use("/upload", csvRouter);

module.exports = app;
