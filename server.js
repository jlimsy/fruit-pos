// Require the installed modules for Express
const express = require("express");
const path = require("path");
const logger = require("morgan");
const { authJWT } = require("./middleware/authJWT");
const cors = require("cors");

// configure databse
require("dotenv").config();
require("./config/database");

// Start the express server
const app = express();

// middleware
app.use(logger("dev"));
app.use(express.json());
app.use(express.static(path.join(__dirname, "dist")));
app.use(
  cors({
    origin: ["https://fruit-pos-4voa.vercel.app/"],
    methods: ["POST", "GET"],
    credentials: true,
  })
);

// API routes
app.use("/api/users", require("./routes/api/usersRouter"));
app.use("/api/products", require("./routes/api/productsRouter"));
app.use("/api/orders", require("./routes/api/ordersRouter"));

// Catch all
app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

const port = process.env.PORT || 3000;

app.listen(port, function () {
  console.log(`Express app running on port ${port}`);
});
