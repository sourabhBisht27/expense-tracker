const express = require("express");
const notfoundHandler = require("./handlers/notfound.handler");
const cors = require("cors");
const errorHandler = require("./handlers/error.handler");
const routes = require("./routes");
const app = express();
app.use(express.json());
app.use(cors());
app.use(routes);
app.all("*", notfoundHandler)
app.use(errorHandler);
module.exports = app;