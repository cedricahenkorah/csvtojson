const CSV = require("./csv.model");
const fs = require("fs");
const csv = require("csv-parser");

async function csvtojson(req, res) {
  const jsonData = [];

  const csvData = req.file.buffer.toString();

  // Parse the CSV data
  csvData
    .split("\n") // Split data into lines
    .forEach((row) => {
      const rowData = row.split(","); // Split line into fields
      const jsonRow = {};
      for (let i = 0; i < rowData.length; i++) {
        jsonRow[`field_${i}`] = rowData[i]; // Store each field as 'field_i' in JSON object
      }
      jsonData.push(jsonRow);
    });

  res.json(jsonData);
}

module.exports = { csvtojson };
