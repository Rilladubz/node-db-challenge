const express = require("express");

const resources = require("./resources-model");

const router = express.Router();

// handler functions
router.get("/", (req, res) => {
  resources.find().then(resources => {
    res
      .status(200)
      .json({ resources })
      .catch(err => {
        res
          .status(500)
          .json({ errorMessage: "Error while trying to find resources", err });
      });
  });
});

router.post("/", resourceBodyValidation, (req, res) => {
  resources
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
function resourceBodyValidation(req, res, next) {
  body = req.body;
  if (body.name < 1) {
    res.status(400).json({ errorMessage: "Name of resource is required" });
  } else if (body.description < 1) {
    res
      .status(400)
      .json({ errorMessage: "Description of resource is required" });
  } else {
    next();
  }
}

module.exports = router;
