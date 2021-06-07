const dbInvernadevro = require("../config/dbInvernadevro");
const User = require("../models/User");
const Plant = require("../models/Plant");
const Plantpot = require("../models/Plantpot");

const loadModels = () => {
  Plantpot.belongsTo(User);
  Plant.hasMany(Plantpot);
  User.hasMany(Plantpot);

  dbInvernadevro.sync().then(() => console.log("🌻 Everything is ok! 🌻"));
};

module.exports = loadModels;
