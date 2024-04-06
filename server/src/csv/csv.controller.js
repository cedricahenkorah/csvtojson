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

async function readJson(req, res) {
  try {
    const json = await CSV.find({}, { __v: 0, _id: 0 }).lean();

    if (json) {
      return res.status(200).render("read-json", {
        path: "/read",
        json: json,
      });
    }
  } catch (error) {
    console.error("Error fetching JSON data:", error);
    return res.status(500).send("Internal Server Error");
  }
}

module.exports = { csvtojson, readJson };
