const { DataTypes } = require("sequelize");
const dbInvernadevro = require("../config/dbInvernadevro");
const { STATUS } = require("../util/constants");

// adoption_date:'2021-10-02'
// name:'Dora'
// note:'Esta es otra planta'
// PlantId:'1'
// UserId:'2be7876d-d965-4017-b81a-319988091476'

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
