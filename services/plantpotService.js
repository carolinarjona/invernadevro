const plantpotRepository = require("../repositories/plantpotRepository");

exports.createPlantpot = async (user, plant, plantpot) => {
  if (!plantpot.name) throw new Error();
  plantpot.UserId = user.id;
  plantpot.PlantId = plant.id;
  await plantpotRepository.insertPlantpot(plantpot);
};

exports.updatePlantpot = async (user, plant, plantpotId) => {
  const plantpot = plantpotRepository.findPlantpotById(plantpotId);
  plantpot.UserId = user.id;
  plantpot.PlantId = plant.id;
  await plantpotRepository.updatePlantpot(plantpot);
};

exports.deletePlantpot = async (user, plant, plantpotId) => {
  const plantpot = plantpotRepository.findPlantpotById(plantpotId);
  plantpot.UserId = user.id;
  plantpot.PlantId = plant.id;
  await plantpotRepository.deletePlantpot(plantpot);
};
