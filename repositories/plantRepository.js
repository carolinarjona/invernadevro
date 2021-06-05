const Plant = require("../models/Plant");

exports.insertPlant = async (plant) => {
  return await Plant.create(plant);
};

exports.findAllPlants = async () => {
  return await Plant.findAll();
};

exports.findPlantById = async (plantId) => {
  return await Plant.findByPk(plantId);
};

exports.updatePlant = async (plantId, plantDetails) => {
  return await Plant.update(plantId, plantDetails);
};

exports.deletePlant = async (plantId) => {
  return await Plant.destroy({ where: { plantId } });
};
