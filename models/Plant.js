const { DataTypes } = require("sequelize");
const dbInvernadevro = require("../config/dbInvernadevro");
const { LIGHT_LEVEL } = require("../util/constants");
const { DIFFICULTY } = require("../util/constants");
const { WATERING_FREQUENCY } = require("../util/constants");

const Plant = dbInvernadevro.define("Plant", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING(60),
  },
  botanical_name: {
    type: DataTypes.STRING(64),
  },
  info: {
    type: DataTypes.TEXT,
  },
  difficulty: {
    type: DataTypes.ENUM(Object.values(DIFFICULTY)),
    defaultValue: DIFFICULTY.TBD,
  },
  light_level: {
    type: DataTypes.ENUM(Object.values(LIGHT_LEVEL)),
    defaultValue: LIGHT_LEVEL.TBD,
  },
  watering_frequency: {
    type: DataTypes.ENUM(Object.values(WATERING_FREQUENCY)),
    defaultValue: WATERING_FREQUENCY.TBD,
  },
  pet_friendly: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  plant_image_path: {
    type: DataTypes.TEXT,
  },
});

module.exports = Plant;
