const dbInvernadevro = require("../config/dbInvernadevro");
const User = require("../models/User");
const Plant = require("../models/Plant");
const UserPlant = require("../models/UserPlant");

const loadModels = () => {
  User.belongsToMany(Plant, {
    through: UserPlant,
    foreignKey: "userId",
  }),
    Plant.belongsToMany(User, {
      through: UserPlant,
      foreignKey: "plantId",
    });

  dbInvernadevro.sync().then(() => console.log("All models loaded"));
};

module.exports = loadModels;
