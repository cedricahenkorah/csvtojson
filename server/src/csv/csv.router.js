const express = require("express");
const { csvtojson } = require("./csv.controller");
const multer = require("multer");
const router = express.Router();

const upload = multer({ dest: "uploads/" });

router.post("/", upload.single("file"), csvtojson);

module.exports = router;
