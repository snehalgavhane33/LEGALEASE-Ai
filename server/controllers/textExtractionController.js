const fs = require("fs");
const path = require("path");
const pdfParse = require("pdf-parse");
const mammoth = require("mammoth");

const extractText = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "No document uploaded.",
      });
    }

    const filePath = path.resolve(req.file.path);
    const extension = path.extname(req.file.originalname).toLowerCase();

    let text = "";

    if (extension === ".pdf") {
      const fileBuffer = fs.readFileSync(filePath);
      const pdfData = await pdfParse(fileBuffer);
      text = pdfData.text;
    } 
    
    else if (extension === ".docx") {
      const result = await mammoth.extractRawText({
        path: filePath,
      });

      text = result.value;
    } 
    
    else {
      return res.status(400).json({
        success: false,
        message: "Only PDF and DOCX files are supported.",
      });
    }

    res.status(200).json({
      success: true,
      message: "Document text extracted successfully.",
      document: {
        filename: req.file.originalname,
        text: text.trim(),
        characters: text.trim().length,
      },
    });

  } catch (error) {
    console.error("Text extraction error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to extract document text.",
    });
  }
};

module.exports = {
  extractText,
};