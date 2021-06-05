const plantRepository = require("../repositories/plantRepository");

exports.getAllPlants = async () => {
  const plants = await plantRepository.findAllPlants();
  return plants;
};

exports.getPlant = async (plantId) => {
  const plant = await plantRepository.findPlantById(plantId);
  return plant.toJSON();
};

exports.createPlant = async (plant) => {
  if (!plant.name || !plant.info) {
    throw new Error();
  }
  await plantRepository.insertPlant(plant);
};

exports.editPlant = async (plantId, plantDetails) => {
  await plantRepository.updatePlant(plantDetails, { where: { plantId } });
};

exports.deletePlant = async (plantId) => {
  await plantRepository.deletePlant(plantId);
};
