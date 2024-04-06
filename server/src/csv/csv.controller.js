const CSV = require("./csv.model");
const fs = require("fs");
const csv = require("csv-parser");

async function csvtojson(req, res) {
  const deleted = await CSV.deleteMany();

  const savedPromises = [];

  if (deleted) {
    fs.createReadStream(req.file.path)
      .pipe(csv())
      .on("data", async (row) => {
        const document = new CSV(row);

        savedPromises.push(document.save());
      })
      .on("end", async () => {
        await Promise.all(savedPromises);

        await res.redirect("/upload/read");
      });
  }
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
