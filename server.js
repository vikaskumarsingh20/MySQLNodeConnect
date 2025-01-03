const express = require("express");
const morgan = require("morgan");
const mysql = require("mysql");
const dotenv = require("dotenv");
const mysqlPool = require("./config/database");

dotenv.config(); // Configure dotenv first

const app = express();

// Middlewares
app.use(express.json());
app.use(morgan("dev"));

// Routes
// app.use("/api/v1/student", require("/routers/studentRoutes"));  
// app.use("/api/v1/student",require("/routers/studentRoutes"));


// Root endpoint
app.get("/", (req, res) => {
  console.log("Connection established");
  res.send("Hello, World!");
});

// Conditional listen with database connection check
const PORT = process.env.PORT || 3000;

mysqlPool
  .query("SELECT 1") // Test database connection
  .then(() => {
    console.log("MySQL DB Connected");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Failed to connect to MySQL DB:", error.message);
  });
