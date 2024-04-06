const CSV = require("./csv.model");
const fs = require("fs");
const csv = require("csv-parser");

async function csvtojson(req, res) {
  const jsonData = [];

  const parser = fs
    .createReadStream(req.file.path)
    .pipe(csv())
    .on("data", async (row) => {
      jsonData.push(row);
    })
    .on("end", async () => {
      res.json(jsonData);
    });

  parser.on("error", (error) => {
    console.error("Error parsing CSV:", error);
    res.status(500).json({ error: "Internal Server Error" });
  });
}

module.exports = { csvtojson };
