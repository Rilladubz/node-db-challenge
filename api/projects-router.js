const express = require("express");

const projects = require("./projects-model");

const router = express.Router();

// handler functions

router.get("/", (req, res) => {
  projects.find().then(projects => {
    const updated = projects.map(project => {
      if (project.completed === 0) {
        return { ...project, completed: false };
      } else {
        return { ...project, completed: true };
      }
    });
    res
      .status(200)
      .json({ updated })
      .catch(err => {
        res
          .status(500)
          .json({ errorMessage: "Error while trying to find projects", err });
      });
  });
});

router.post("/", projectBodyValidation, (req, res) => {
  projects
    .add(req.body)
    .then(item => {
      res.status(201).json({ item });
    })
    .catch(err => {
      res.status(500).json({
        errorMessage: "Error failed while attempting to post new project"
      });
    });
});

// Middleware
function projectBodyValidation(req, res, next) {
  body = req.body;
  if (body.name < 1) {
    res.status(400).json({ errorMessage: "Name of project is required" });
  } else if (body.description < 1) {
    res
      .status(400)
      .json({ errorMessage: "Description of project is required" });
  } else {
    next();
  }
}

module.exports = router;
