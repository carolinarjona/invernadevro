var express = require("express");
const roleValidation = require("../middleware/roleValidation");
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

router.get("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const plant = await plantService.getPlant(id);
    res.status(200).json(plant);
  } catch (error) {
    next(error);
  }
});

router.post("/", roleValidation("admin"), async (req, res, next) => {
  try {
    await plantService.createPlant(req.user, req.body);
    res.sendStatus(201);
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", roleValidation("admin"), async (req, res) => {
  try {
    const { id } = req.params;
    await plantService.deletePlant(id, req.user);
    res.sendStatus(204);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.put("/:id", roleValidation("admin"), async (req, res) => {
  try {
    const { id } = req.params;
    await plantService.editPlant(id, req.user, req.body);
    res.sendStatus(204);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
