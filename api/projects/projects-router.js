// Write your "projects" router here!
const express = require("express");
const { validateId, validateProject } = require("./projects-middleware");

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

router.post("/", validateProject, (req, res, next) => {
  const projectNew = req.body
    Projects.insert(projectNew)
    .then((proj) => {
      res.json(proj);
    })
    .catch(next);
});

router.put("/:id", validateId, validateProject, (req, res, next) => {
    const changes = req.body
    Projects.update(req.params.id, changes)
    .then((proj) => {
      res.json(proj);
    })
    .catch(next);
});

router.delete("/:id", validateId, async (req, res, next) => {
  try {
    const proj = await Projects.get(req.params.id);
    await Projects.remove(req.params.id);
    res.json(proj);
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

router.use((err, res, req, next) => {  //eslint-disable-line
  res.status(err.status || 500).json({
    customMessage: "Something tragic happened inside projects-router",
    message: err.message,
    stack: err.stack,
  });
});

module.exports = router;
