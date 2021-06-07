const plantpotRepository = require("../repositories/plantpotRepository");
const HttpError = require("../util/httpError");
const {
  updatePlantpotSchema,
  insertPlantpotSchema,
} = require("../validations/plantpotValidation");
const checkOwnership = require("../util/checkOwnership");

exports.getAllPlantpots = async () => {
  return await plantpotRepository.findAllPlantpots();
};

exports.getPlantpotById = async (id) => {
  if (!id) throw new HttpError(404, "That plantpot doesnt' exist!");
  return await plantpotRepository.findPlantpotById(id);
};

exports.createPlantpot = async (user, plantpot) => {
  plantpot.UserId = user.id;
  await insertPlantpotSchema.validateAsync(plantpot);
  await plantpotRepository.insertPlantpot(plantpot);
};

exports.updatePlantpot = async (id, user, plantpot) => {
  if (!id) throw new HttpError(404, "That plantpot doesn't exist!");
  const plantpotFound = await plantpotRepository.findPlantpotById(id);
  if (!plantpotFound) throw new HttpError(404, "That plantpot doesn't exist!");
  if (!checkOwnership(plantpotFound, user)) throw new Error();

  await updatePlantpotSchema.validateAsync(plantpot);
  await plantpotRepository.updatePlantpot(id, plantpot);
};

exports.deletePlantpot = async (id, user) => {
  if (!id) throw new HttpError(404, "That plantpot doesn't exist!");
  const plantpotFound = await plantpotRepository.findPlantpotById(id);
  if (!checkOwnership(plantpotFound, user))
    throw new HttpError(401, "You can't do that!");
  await plantpotRepository.deletePlantpot(id);
};
