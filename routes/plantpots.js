var express = require("express");
const roleValidation = require("../middleware/roleValidation");
var router = express.Router();
const plantpotService = require("../services/plantpotService");

router.get("/all", roleValidation("user"), async (req, res, next) => {
  try {
    const plantpots = await plantpotService.getAllPlantpots(req.user);
    res.status(200).json(plantpots);
  } catch (error) {
    next(error);
  }
});

router.get("/:id", roleValidation("user"), async (req, res, next) => {
  try {
    const { id } = req.params;
    const plantpot = await plantpotService.getPlantpotById(id, req.user);
    res.status(200).json(plantpot);
  } catch (error) {
    next(error);
  }
});

router.post("/", roleValidation("user"), async (req, res, next) => {
  try {
    await plantpotService.createPlantpot(req.user, req.body);
    res.sendStatus(201);
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", roleValidation("user"), async (req, res, next) => {
  try {
    const { id } = req.params;
    await plantpotService.deletePlantpot(id, req.user);
    res.sendStatus(204);
  } catch (error) {
    next(error);
  }
});

router.put("/:id", roleValidation("user"), async (req, res, next) => {
  try {
    const { id } = req.params;
    await plantpotService.updatePlantpot(id, req.user, req.body);
    res.sendStatus(204);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
