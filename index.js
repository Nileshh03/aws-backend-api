const express = require("express");
const app = express();

// Health check endpoint (VERY IMPORTANT for EB)
app.get("/health", (req, res) => {
  res.status(200).json({ status: "UP" });
});

// Sample API endpoint
app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello from AWS Elastic Beanstalk" });
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});
