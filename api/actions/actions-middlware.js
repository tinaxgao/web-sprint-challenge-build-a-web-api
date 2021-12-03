const Actions = require('./actions-model')

async function validateId (req, res, next) {
    try {
      const id = await Actions.get(req.params.id);
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

  function validateAction (req, res, next) {
    const { project_id, description, notes, completed } = req.body;
    if (!project_id || !description || !description.trim() || !notes || !notes.trim()) {
      res
        .status(400)
        .json({ message: "missing required name & description field" });
    } else {
      req.project_id = project_id;
      req.description = description.trim();
      req.notes = notes.trim();
      req.completed = completed;
      next();
    }
  }

module.exports = {
    validateId,
    validateAction
}