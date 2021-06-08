const dbInvernadevro = require("../config/dbInvernadevro");
const User = require("../models/User");
const Plant = require("../models/Plant");
const Plantpot = require("../models/Plantpot");

const loadModels = () => {
  Plantpot.belongsTo(User);
  Plantpot.belongsTo(Plant);
  User.hasMany(Plantpot);
  Plant.hasMany(Plantpot);

  dbInvernadevro.sync().then(() => console.log("🌻 Everything is ok! 🌻"));
};

module.exports = loadModels;
