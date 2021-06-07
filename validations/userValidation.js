const Joi = require("joi");

exports.insertUserSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(35).alphanum().required(),
  username: Joi.string().max(35),
  full_name: Joi.string().max(64),
  biography: Joi.string(),
  social_netwotk: Joi.string().base64(),
});

exports.updateUserSchema = Joi.object({
  email: Joi.string().email(),
  password: Joi.string().min(35).alphanum(),
  username: Joi.string().max(35),
  full_name: Joi.string().max(64),
  biography: Joi.string(),
  social_netwotk: Joi.string().base64(),
});
