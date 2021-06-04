const plantRepository = require("../repositories/plantRepository");

exports.getAllPlants = async () => {
  const plants = await plantRepository.findAllPlants();
  return plants;
};

exports.getPlant = async (id) => {
  const plant = await plantRepository.findPlantById(id);
  return plant.toJSON();
};

exports.createPlant = async (plant) => {
  if (!plant.name || !plant.info) {
    throw new Error();
  }
  await plantRepository.insertPlant(plant);
};

exports.editPlant = async (plantId, plantDetails) => {
  const plant = await plantRepository.findPlantById(plantId);
  await plantRepository.updatePlant(plant, plantDetails);
};

exports.deletePlant = async (id) => {
  await plantRepository.deletePlant(id);
};
