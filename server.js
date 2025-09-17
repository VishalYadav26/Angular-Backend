const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

// Middlewares
app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
// mongoose.connect("mongodb://127.0.0.1:27017/bookfair")
mongoose.connect("mongodb+srv://Vishal123:Vishal123@cluster0.sk16fw3.mongodb.net/bookfair?retryWrites=true&w=majority&appName=Cluster0")
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ DB connection error:", err));


// Routes
app.use("/api/feedback", require("./routes/feedback"));

// Start server
const PORT = 5000;
app.listen(PORT, () => console.log(`✅ Server running at http://localhost:${PORT}`));
