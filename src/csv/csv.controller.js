const CSV = require("./csv.model");
const fs = require("fs");
const csv = require("csv-parser");

async function csvtojson(req, res) {
  const deleted = await CSV.deleteMany();

  if (deleted) {
    fs.createReadStream(req.file.path)
      .pipe(csv())
      .on("data", async (row) => {
        const document = new CSV(row);

        await document.save();
      })
      .on("end", () => {
        console.log("CSV file successfully processed");
        res.status(200).redirect("/upload/read");
      });
  }
}

async function readJson(req, res) {
  const json = await CSV.find({}, { __v: 0, _id: 0 }).lean();

  return res.status(200).render("read-json", {
    path: "/read",
    json: json,
  });
}

module.exports = { csvtojson, readJson };
