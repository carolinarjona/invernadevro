const plantRepository = require("../repositories/plantRepository");
const HttpError = require("../util/httpError");
const {
  updatePlantSchema,
  insertPlantSchema,
} = require("../validations/plantValidation");

exports.getAllPlants = async () => {
  const plants = await plantRepository.findAllPlants();
  return plants;
};

exports.getPlant = async (plantId) => {
  if (!plantId) throw new HttpError(400, "That plant doens't exist");
  const plant = await plantRepository.findPlantById(plantId);
  return plant.toJSON();
};

exports.createPlant = async (plant) => {
  if (!plant.name || !plant.info) {
    throw new HttpError(400, "Give al least a name and info!");
  }

  await insertPlantSchema.validateAsync(plant);
  await plantRepository.insertPlant(plant);
};

exports.editPlant = async (plantId, plantDetails) => {
  if (!plantId) throw new HttpError(400, "That plant doens't exist");
  await updatePlantSchema.validateAsync(plantDetails);
  await plantRepository.updatePlant(plantDetails, { where: { plantId } });
};

exports.deletePlant = async (plantId) => {
  if (!plantId) throw new HttpError(400, "That plant doens't exist");
  await plantRepository.deletePlant(plantId);
};
