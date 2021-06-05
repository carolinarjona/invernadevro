const plantpotRepository = require("../repositories/plantpotRepository");

exports.getAllPlantpots = async () => {
  return await plantpotRepository.getAllPlantpots();
};

exports.getPlantpotById = async (id) => {
  return await plantpotRepository.getPlantpotById(id);
};

exports.createPlantpot = async (plantpot) => {
  console.log(plantpot);
  // (plantpot, {userId, plantId, ...plantpot}) = plantpot;
  // plantpot.userId = userId;
  // plantpot.plantId = plantId;
  await plantpotRepository.insertPlantpot(plantpot);
};

exports.updatePlantpot = async (plantpotId) => {
  const plantpot = plantpotRepository.findPlantpotById(plantpotId);
  // plantpot.userId = user.userId;
  // plantpot.plantId = plant.plantId;
  await plantpotRepository.updatePlantpot(plantpot);
};

exports.deletePlantpot = async (plantpotId) => {
  const plantpot = plantpotRepository.findPlantpotById(plantpotId);
  // plantpot.userId = user.userId;
  // plantpot.plantId = plant.plantId;
  await plantpotRepository.deletePlantpot(plantpot);
};
