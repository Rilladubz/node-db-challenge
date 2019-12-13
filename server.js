const express = require("express");

const ProjectsRouter = require("./api/projects-router");
const ResourcesRouter = require("./api/resources-router");
const TasksRouter = require("./api/tasks-router");

const server = express();

server.get("/", (req, res) => {
  res.send("<h1>Welcome to the Server</h1>");
});

server.use(express.json());
server.use("api/projects", ProjectsRouter);
server.use("api/resources", ResourcesRouter);
server.use("api/tasks", TasksRouter);

module.exports = server;
