const { DataTypes } = require("sequelize");
const dbInvernadevro = require("../config/dbInvernadevro");

const UserPlant = dbInvernadevro.define("UserPlant", {
  name: {
    type: DataTypes.STRING(35),
  },
  adoption_date: {
    type: DataTypes.DATEONLY,
  },
  note: {
    type: DataTypes.TEXT,
  },
  userplant_image_path: {
    type: DataTypes.TEXT,
  },
});

module.exports = UserPlant;
