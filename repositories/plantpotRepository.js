const Plant = require("../models/Plant");
const Plantpot = require("../models/Plantpot");
const User = require("../models/User");

const plantUserInfo = {
  include: [
    {
      model: Plant,
      attributes: [
        "name",
        "info",
        "difficulty",
        "light_level",
        "watering_frequency",
        "pet_friendly",
      ],
    },
    {
      model: User,
      attributes: ["username"],
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
