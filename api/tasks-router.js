const express = require("express");

const tasks = require("./tasks-model");

const router = express.Router();

// handler functions
router.get("/", (req, res) => {
  tasks
    .find()
    .then(tasks => {
      const updated = tasks.map(task => {
        if (task.completed === 0) {
          return { ...task, completed: false };
        } else {
          return { ...task, completed: true };
        }
      });
      res.status(200).json({ updated });
    })
    .catch(err => {
      res
        .status(500)
        .json({ errorMessage: "Error while trying to find tasks", err });
    });
});

router.post("/", taskBodyValidation, (req, res) => {
  tasks
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
function taskBodyValidation(req, res, next) {
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
