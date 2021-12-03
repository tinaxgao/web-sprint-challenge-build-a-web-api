// Write your "projects" router here!
const express = require("express");

const router = express.Router();
const Projects = require('./projects-model')

router.get("/", (req, res) => {
    res.json([
      { id: 1, username: "foo", password: "p123" },
      { id: 2, username: "bar", password: "p456" },
      { id: 3, username: "foobar", password: "p789" },
    ]);
  });

  module.exports = router;
