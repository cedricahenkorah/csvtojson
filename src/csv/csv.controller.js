const CSV = require("./csv.model");
const fs = require("fs");
const csv = require("csv-parser");

async function csvtojson(req, res) {
  fs.createReadStream(req.file.path)
    .pipe(csv())
    .on("data", async (row) => {
      const document = new CSV(row);

      await document.save();
    })
    .on("end", () => {
      console.log("CSV file successfully processed");
      res.status(200).redirect("/");
    });
}

module.exports = { csvtojson };
