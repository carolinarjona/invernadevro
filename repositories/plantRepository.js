const Plant = require("../models/Plant");

exports.insertPlant = async (plant) => {
  return await Plant.create(plant);
};

exports.findAllPlants = async () => {
  return await Plant.findAll();
};

exports.findPlantById = async (id) => {
  return await Plant.findByPk(id);
};

exports.updatePlant = async (id, plantDetails) => {
  return await Plant.update(plantDetails, { where: { id } });
};

exports.deletePlant = async (id) => {
  return await Plant.destroy({ where: { id } });
};
