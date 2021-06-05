var express = require("express");
var router = express.Router();
const plantService = require("../services/plantService");

router.get("/all", async (req, res, next) => {
  try {
    const plants = await plantService.getAllPlants();
    res.status(200).json(plants);
  } catch (error) {
    next(error);
  }
});

router.get("/:plantId", async (req, res, next) => {
  try {
    const { plantId } = req.params;
    const plant = await plantService.getPlant(plantId);
    res.status(200).json(plant);
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    await plantService.createPlant(req.body);
    res.sendStatus(201);
  } catch (error) {
    next(error);
  }
});

router.delete("/:plantId", async (req, res) => {
  try {
    const { plantId } = req.params;
    await plantService.deletePlant(plantId);
    res.sendStatus(204);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.put("/", async (req, res) => {
  try {
    const { plantId } = req.body;
    await plantService.editPlant(plantId, req.body);
    res.sendStatus(204);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
