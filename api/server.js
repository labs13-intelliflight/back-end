const cors = require("cors");
const express = require("express");
const helmet = require("helmet");

const server = express();

// Import Routers

const usersRouter = require('../routers/users/users-router');
const pirepsRouter = require('../routers/pireps/pireps-router')

// Configure Middleware

server.use(helmet());
server.use(cors());
server.use(express.json());

server.get("/", (req, res) => {
  res.send("intelliflight api running");
});

// Configure Routers

server.use("/api/users", usersRouter);
server.use("/api/pireps", pirepsRouter)


module.exports = server;
