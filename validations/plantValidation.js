const Joi = require("joi");
const { LIGHT_LEVEL } = require("../util/constants");
const { DIFFICULTY } = require("../util/constants");
const { WATERING_FREQUENCY } = require("../util/constants");

exports.insertPlantSchema = Joi.object({
  name: Joi.string().min(10).max(60).required(),
  botanical_name: Joi.string().min(10).required(),
  info: Joi.string(),
  difficulty: Joi.string().valid(...Object.values(DIFFICULTY)),
  light_level: Joi.string().valid(...Object.values(LIGHT_LEVEL)),
  watering_frequency: Joi.string().valid(...Object.values(WATERING_FREQUENCY)),
  pet_friendly: Joi.boolean(),
  plant_image_path: Joi.string().base64(),
});

exports.updatePlantSchema = Joi.object({
  name: Joi.string().min(10).max(60),
  botanical_name: Joi.string().min(10),
  info: Joi.string(),
  difficulty: Joi.string().valid(...Object.values(DIFFICULTY)),
  light_level: Joi.string().valid(...Object.values(LIGHT_LEVEL)),
  watering_frequency: Joi.string().valid(...Object.values(WATERING_FREQUENCY)),
  pet_friendly: Joi.boolean(),
  plant_image_path: Joi.string().base64(),
});
