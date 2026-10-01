const express = require("express");
const upload = require("../middleware/uploadMiddleware");
const { uploadDocument } = require("../controllers/documentController");
const { extractText } = require("../controllers/textExtractionController");

const router = express.Router();

// Upload document
router.post(
  "/upload",
  upload.single("document"),
  uploadDocument
);

// Upload and extract document text
router.post(
  "/extract-text",
  upload.single("document"),
  extractText
);

module.exports = router;