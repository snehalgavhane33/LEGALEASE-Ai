const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

// Load environment variables FIRST
dotenv.config();

// Import routes AFTER dotenv.config()
const documentRoutes = require("./routes/documentRoutes");
const aiAnalysisRoutes = require("./routes/aiAnalysisRoutes");

const app = express();

const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Serve uploaded files
app.use("/uploads", express.static("uploads"));

// Test route
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "LegalEase AI Server is running",
  });
});

// Document routes
app.use("/api/documents", documentRoutes);

// AI analysis routes
app.use("/api/ai", aiAnalysisRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`LegalEase AI server running on http://localhost:${PORT}`);
});