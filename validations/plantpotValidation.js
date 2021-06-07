const Joi = require("joi");
const { STATUS } = require("../util/constants");

exports.insertPlantpotSchema = Joi.object({
  name: Joi.string().min(2).max(60).required(),
  status: Joi.string().valid(...Object.values(STATUS)),
  adoption_date: Joi.date(),
  note: Joi.string(),
  plantpot_image_path: Joi.string().base64(),
  UserId: Joi.string().required(),
  PlantId: Joi.number().required(),
});

// adoption_date:'2021-10-02'
// name:'Dora'
// note:'Esta es otra planta'
// PlantId:'1'
// UserId:'2be7876d-d965-4017-b81a-319988091476'

exports.updatePlantpotSchema = Joi.object({
  name: Joi.number().min(2).max(60),
  status: Joi.string().valid(...Object.values(STATUS)),
  adoption_date: Joi.date(),
  note: Joi.string(),
  plantpot_image_path: Joi.string().base64(),
});
