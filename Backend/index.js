const express = require("express");
const mongoose = require("mongoose");
// Start the Express server
const app = express();

// Get the connection string from MongoDB Atlas
const MONGO_URL =
  "";

// Connect to MongoDB
mongoose
  .connect(MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((res) => {
    console.log("Mongodb Connected !");
  });

// Create a simple model
const UserDashboardContent = new mongoose.Schema({
  heading: String,
});

// Create the model
const UserDashboardData = mongoose.model(
  "UserDashboardContent",
  UserDashboardContent
);

app.post("/api/post", async (req, res) => {
  const { heading } = req.body;
  const newReading = new UserDashboardData({
    heading,
  });
  try {
    const savedReading = await newReading.save();
    res.json({ message: "Data saved successfully" }); // Send a JSON response
  } catch (error) {
    console.error("Error saving data:", error);
    res.status(500).json({ error: "Failed to save data" }); // Send a JSON response
  }
});

app.get("/api/get", async (req, res) => {
  const userinfo = await UserDashboardData.find().then((res) => {
    console.log(res);
  });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
