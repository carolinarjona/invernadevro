const plantpotRepository = require("../repositories/plantpotRepository");
const HttpError = require("../util/httpError");
const {
  updatePlantpotSchema,
  insertPlantpotSchema,
} = require("../validations/plantpotValidation");
const { checkOwnership } = require("../util/checkOwnership");

exports.getAllPlantpots = async () => {
  return await plantpotRepository.getAllPlantpots();
};

exports.getPlantpotById = async (plantpotId) => {
  if (!plantpotId) throw new HttpError(404, "That plantpot doesnt' exist!");
  return await plantpotRepository.getPlantpotById(plantpotId);
};

exports.createPlantpot = async (user, plant, plantpot) => {
  if (!plant.name) throw new HttpError(400, "Give a name to your plant!");
  console.log(plantpot);
  plantpot.userId = user.userId;
  plantpot.plantId = plant.plantId;

  await insertPlantpotSchema.validateAsync(plantpot);
  await plantpotRepository.insertPlantpot(plantpot);
};

exports.updatePlantpot = async (
  user,
  plant,
  { plantpotId, ...plantDetails }
) => {
  if (!plantpotId) throw new HttpError(404, "That plant doesn't exist!");
  const plantpot = plantpotRepository.findPlantpotById(plantpotId);
  if (!plantpot) throw new Error(404, "That plantpot doesn't exist!");

  plantpot.userId = user.userId;
  plantpot.plantId = plant.plantId;

  await updatePlantpotSchema.validateAsync(plantDetails);
  await plantpotRepository.updatePlantpot(plantpotId, plantDetails);
};

exports.deletePlantpot = async (user, plantpot) => {
  if (!plantpot.plantpotId)
    throw new HttpError(404, "That plantpot doesnt' exist!");
  if (!checkOwnership(plantpot, user))
    throw new HttpError(401, "You can't do that!");
  const plantpotFound = plantpotRepository.findPlantpotById(
    plantpot.plantpotId
  );
  await plantpotRepository.deletePlantpot(plantpotFound);
};
