const cors = require("cors");
const express = require("express");
const helmet = require("helmet");

const server = express();

// Import Routers

const usersRouter = require('../users/users-router');
const authRouter = require('../auth/auth-router');

// Configure Middleware

server.use(helmet());
server.use(cors());
server.use(express.json());

server.get("/", (req, res) => {
  res.send("intelliflight api running");
});

// Configure Routers

server.use("/api/users", usersRouter);
server.use("/auth", authRouter);

module.exports = server;
