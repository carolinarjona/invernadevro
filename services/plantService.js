const plantRepository = require("../repositories/plantRepository");
const HttpError = require("../util/httpError");
const {
  updatePlantSchema,
  insertPlantSchema,
} = require("../validations/plantValidation");
const checkOwnership = require("../util/checkOwnership");
const { ERRORS } = require("../util/constants");

exports.getAllPlants = async () => {
  const plants = await plantRepository.findAllPlants();
  return plants;
};

exports.getPlant = async (id) => {
  if (!id) throw new HttpError(404, ERRORS.NO_PLANT);
  const plant = await plantRepository.findPlantById(id);
  return plant.toJSON();
};

exports.createPlant = async (plant) => {
  await insertPlantSchema.validateAsync(plant);
  await plantRepository.insertPlant(plant);
};

exports.editPlant = async (id, user, plantDetails) => {
  if (!id) throw new HttpError(404, ERRORS.NO_PLANT);

  const plantFound = await plantRepository.findPlantById(id);
  if (!checkOwnership(plantFound, user))
    throw new HttpError(401, ERRORS.CANT_DO);

  await updatePlantSchema.validateAsync(plantDetails);
  await plantRepository.updatePlant(plantDetails, { where: { id } });
};

exports.deletePlant = async (id, user) => {
  if (!id) throw new HttpError(404, ERRORS.NO_PLANT);
  const plantFound = await plantRepository.findPlantById(id);
  if (!checkOwnership(plantFound, user))
    throw new HttpError(401, ERRORS.CANT_DO);
  await plantRepository.deletePlant(id);
};
