const uploadDocument = (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "No document uploaded.",
      });
    }

    res.status(200).json({
      success: true,
      message: "Document uploaded successfully.",
      document: {
        originalName: req.file.originalname,
        filename: req.file.filename,
        size: req.file.size,
        path: req.file.path,
      },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Document upload failed.",
    });
  }
};

module.exports = {
  uploadDocument,
};