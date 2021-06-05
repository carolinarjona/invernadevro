var express = require("express");
var router = express.Router();
const plantpotService = require("../services/plantpotService");

router.get("/all", async (req, res, next) => {
  try {
    const plantpots = await plantpotService.getAllPlantpots();
    res.status(200).json(plantpots);
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const plantpot = await plantpotService.getPlantpotById(id);
    res.status(200).json(plantpot);
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    await plantpotService.createPlantpot(req.body);
    res.sendStatus(201);
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await plantpotService.deletePlantpot(id);
    res.sendStatus(204);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await plantpotService.updatePlantpot(id, req.body);
    res.sendStatus(204);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
