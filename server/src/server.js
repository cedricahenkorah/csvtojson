require("dotenv").config();
const http = require("http");
const mongoose = require("mongoose");
const app = require("./api/app");
const connectDB = require("./config/dbConnection");

const PORT = process.env.PORT || 3000;
const server = http.createServer(app);

mongoose.connection.once("open", () => {
  console.log("MongoDB connection ready!");
});

mongoose.connection.on("error", (err) => {
  console.log("mongoDB connection error", err);
});

async function startServer() {
  await connectDB();
  server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}

startServer();
