const express = require("express");
const { analyzeDocument } = require("../controllers/aiAnalysisController");

const router = express.Router();

router.post("/analyze", analyzeDocument);

module.exports = router;