const Plant = require("../models/Plant");
const Plantpot = require("../models/Plantpot");
const User = require("../models/User");

const plantUserInfo = {
  include: [
    {
      model: User,
      attributes: ["username"],
    },
    {
      model: Plant,
      attributes: ["name"],
    },
  ],
};

exports.findAllPlantpots = async () => {
  return await Plantpot.findAll(plantUserInfo);
};

exports.findPlantpotById = async (id) => {
  return await Plantpot.findByPk(id, plantUserInfo);
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
