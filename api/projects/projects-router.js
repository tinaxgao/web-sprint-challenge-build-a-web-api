// Write your "projects" router here!
const express = require("express");
const { validateId } = require('./projects-middleware')

const router = express.Router();
const Projects = require("./projects-model");

router.get("/", async (req, res, next) => {
  try {
    const proj = await Projects.get();
    res.json(proj);
  } catch (err) {
    next(err);
  }
});

router.get("/:id", validateId, async (req, res, next) => {
  try {
    const proj = await Projects.get(req.params.id);
    res.json(proj);
  } catch (err) {
    next(err);
  }
});

router.post("/", async (req, res, next) => {
  try {
    Projects.get();

    res.json(res);
  } catch (err) {
    next(err);
  }
});

router.put("/", async (req, res, next) => {
  try {
    Projects.get();

    res.json(res);
  } catch (err) {
    next(err);
  }
});

router.delete("/", async (req, res, next) => {
  try {
    Projects.get();

    res.json(res);
  } catch (err) {
    next(err);
  }
});

router.get("/", async (req, res, next) => {
  try {
    Projects.get();

    res.json(res);
  } catch (err) {
    next(err);
  }
});

router.use((err, res, req, next) => { //eslint-disable-line
  res.status(err.status || 500).json({
    customMessage: "Something tragic happened inside projects-router",
    message: err.message,
    stack: err.stack,
  });
});

module.exports = router;
