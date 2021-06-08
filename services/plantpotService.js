const plantpotRepository = require("../repositories/plantpotRepository");
const HttpError = require("../util/httpError");
const {
  updatePlantpotSchema,
  insertPlantpotSchema,
} = require("../validations/plantpotValidation");
const checkOwnership = require("../util/checkOwnership");
const { ERRORS } = require("../util/constants");

exports.getAllPlantpots = async () => {
  return await plantpotRepository.findAllPlantpots();
};

exports.getPlantpotById = async (id) => {
  if (!id) throw new HttpError(404, ERRORS.NO_PLANTPOT);
  return await plantpotRepository.findPlantpotById(id);
};

exports.createPlantpot = async (user, plantpot) => {
  plantpot.UserId = user.id;
  await insertPlantpotSchema.validateAsync(plantpot);
  await plantpotRepository.insertPlantpot(plantpot);
};

exports.updatePlantpot = async (id, user, plantpot) => {
  if (!id) throw new HttpError(404, ERRORS.NO_PLANTPOT);
  const plantpotFound = await plantpotRepository.findPlantpotById(id);

  if (!checkOwnership(plantpotFound, user))
    throw new HttpError(401, ERRORS.CANT_DO);

  await updatePlantpotSchema.validateAsync(plantpot);
  await plantpotRepository.updatePlantpot(id, plantpot);
};

exports.deletePlantpot = async (id, user) => {
  if (!id) throw new HttpError(404, ERRORS.NO_PLANTPOT);
  const plantpotFound = await plantpotRepository.findPlantpotById(id);
  if (!checkOwnership(plantpotFound, user))
    throw new HttpError(401, ERRORS.CANT_DO);
  await plantpotRepository.deletePlantpot(id);
};
