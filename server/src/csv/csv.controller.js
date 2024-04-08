const CSV = require("./csv.model");
const fs = require("fs");
const csv = require("csv-parser");
const axios = require("axios");
const cron = require("node-cron");

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

      fs.unlink(req.file.path, (err) => {
        if (err) {
          console.error("Error deleting file:", err);
        } else {
          console.log("File deleted successfully");
        }
      });
    });

  parser.on("error", (error) => {
    console.error("Error parsing CSV:", error);
    res.status(500).json({ error: "Internal Server Error" });
  });
}

async function wakeServer() {
  const url = process.env.SERVER_URL;

  try {
    const response = await fetch(`${url}`);

    if (response.ok) {
      console.log("Server is awake");
    } else {
      throw new Error("Server is down");
    }
  } catch (error) {
    console.error("Error waking server:", error);
  }
}

cron.schedule("*/5 * * * *", wakeServer);

module.exports = { csvtojson };
