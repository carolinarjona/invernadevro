const Plantpot = require("../models/Plantpot");

exports.findPlantpotById = async (id) => {
  return await Plantpot.findByPk(id);
};

exports.insertPlantpot = async (plantpot) => {
  return await Plantpot.create(plantpot);
};

exports.deletePlantpot = async (id) => {
  return await Plantpot.destroy({ where: { id } });
};

exports.updatePlantpot = async (id, plantpotDetails) => {
  return await Plantpot.update(plantpotDetails, { where: { id } });
};
