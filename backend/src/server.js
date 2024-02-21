const dotenvPath =
  process.env.NODE_ENV !== "production"
    ? `../.env${`${process.env.NODE_ENV ? `.${process.env.NODE_ENV}` : ""}`}`
    : "../.env";
require("dotenv").config({
  path: dotenvPath,
});
const mongoose = require("mongoose");
const { dbUrl } = require("./config").getMongoDbConfig();

mongoose
  .connect(dbUrl)
  .then(() => {
    console.log("Connected to mongodb");
  })
  .catch((err) => {
    console.error(err);
  });
const app = require("./app");
const { createServer } = require("http");
const PORT = process.env.PORT || 9000;
const server = createServer(app);

server.listen(PORT, () => {
  console.log("Server is running on ", PORT);
});
