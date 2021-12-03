// Write your "actions" router here!
const express = require('express')
const {validateId, validateAction } = require('./actions-middlware')

const router = express.Router();
const Actions = require('./actions-model')


router.get("/", async (req, res, next) => {
    try {
      const proj = await Actions.get();
      res.json(proj);
    } catch (err) {
      next(err);
    }
  });



  router.get("/:id", validateId, async (req, res, next) => {
    try {
        const action = await Actions.get(req.params.id);
        res.json(action);
    } catch (err) {
      next(err);
    }
  });

  router.post("/", validateAction, async (req, res, next) => {
    try {
        const newAct = req.body
        const act = await Actions.insert(newAct)
        res.json(act)
    } catch (err) {
      next(err);
    }
  });

//   router.get("/", async (req, res, next) => {
//     try {
     
//     } catch (err) {
//       next(err);
//     }
//   });

//   router.get("/", async (req, res, next) => {
//     try {
     
//     } catch (err) {
//       next(err);
//     }
//   });

module.exports = router;