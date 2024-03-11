const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
require("dotenv").config();
const server = express();

server.use(cors());
server.set("port", process.env.PORT || 3004);
server.use(morgan("dev"));
server.use(express.json());
server.use(express.urlencoded({ extended: false }));

// const routesProduct = require("../Routes/Products/Products.routes");
// server.use("/", routesProduct);

module.exports = server;
