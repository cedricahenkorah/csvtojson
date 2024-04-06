require("dotenv").config();
const http = require("http");
const app = require("../app");

const PORT = process.env.PORT || 3000;
const server = http.createServer(app);

async function startServer() {
  server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}

startServer();
