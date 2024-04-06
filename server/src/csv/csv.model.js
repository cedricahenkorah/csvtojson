const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const csvSchema = new Schema({}, { strict: false });

module.exports = mongoose.model("csv", csvSchema);
