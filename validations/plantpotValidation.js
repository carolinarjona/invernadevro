const Joi = require("joi");
const { STATUS } = require("../util/constants");

exports.insertPlantpotSchema = Joi.object({
  name: Joi.string().min(10).max(60).required(),
  status: Joi.string().valid(...Object.values(STATUS)),
  adoption_date: Joi.date().iso(),
  note: Joi.string(),
  planpot_image_path: Joi.string().base64(),
  userId: Joi.string().required(),
  plantId: Joi.string().required(),
});

exports.updatePlantpotSchema = Joi.object({
  name: Joi.string().min(10).max(60).required(),
  status: Joi.string().valid(...Object.values(STATUS)),
  adoption_date: Joi.date().iso(),
  note: Joi.string(),
  planpot_image_path: Joi.string().base64(),
});
