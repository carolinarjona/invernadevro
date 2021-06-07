const dbInvernadevro = require("../config/dbInvernadevro");
const User = require("../models/User");
const Plant = require("../models/Plant");
const Plantpot = require("../models/Plantpot");

const loadModels = () => {
  User.belongsToMany(Plant, {
    through: Plantpot,
    foreignKey: "userId",
  }),
    Plant.belongsToMany(User, {
      through: Plantpot,
      foreignKey: "plantId",
    });

  dbInvernadevro
    .sync({ force: true })
    .then(() => console.log("🌻 Everything is ok! 🌻"));
};

module.exports = loadModels;
