const { DataTypes } = require("sequelize");
const dbInvernadevro = require("../config/dbInvernadevro");
const { STATUS } = require("../util/constants");

const Plantpot = dbInvernadevro.define("Plantpot", {
  id: {
    primaryKey: true,
    allowNull: false,
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
  },
  name: {
    type: DataTypes.STRING(35),
  },
  status: {
    type: DataTypes.ENUM(Object.values(STATUS)),
    defaultValue: STATUS.ALIVE,
  },
  adoption_date: {
    type: DataTypes.DATEONLY,
  },
  note: {
    type: DataTypes.TEXT,
  },
  plantpot_image_path: {
    type: DataTypes.TEXT,
  },
});

module.exports = Plantpot;
