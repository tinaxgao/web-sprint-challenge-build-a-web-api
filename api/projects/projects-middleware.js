// add middlewares here related to projects
const Projects = require("./projects-model");

async function validateId(req, res, next) {
  try {
    const id = await Projects.get(req.params.id);
    if (!id) {
      res.status(404).json({ message: "project not found" });
    } else {
      req.id = id;
      next();
    }
  } catch (err) {
    res.status(500).json({ message: "uh oh problems finding project" });
  }
}

function validateProject(req, res, next) {
  const { name, description, completed } = req.body;
  if (!name || !name.trim() || !description || !description.trim()) {
    res
      .status(400)
      .json({ message: "missing required name & description field" });
  } else {
    req.name = name.trim();
    req.description = description.trim();
    req.completed = completed;
    next();
  }
}

module.exports = {
  validateId,
  validateProject,
};
