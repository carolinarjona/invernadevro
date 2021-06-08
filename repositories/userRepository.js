const User = require("../models/User");
const Plantpot = require("../models/Plantpot");
const Plant = require("../models/Plant");

const plantUserInfo = {
  include: [
    {
      model: Plantpot,
      attributes: ["name"],
      include: [
        {
          model: Plant,
          attributes: ["name"],
        },
      ],
    },
  ],
};

exports.findAllUsers = async () => {
  return await User.findAll(plantUserInfo);
};

exports.findUserById = async (id) => {
  return await User.findByPk(id, plantUserInfo);
};

exports.findUserWithPasswordByEmail = async (email) => {
  return await User.scope("withPassword").findOne({ where: { email } });
};

exports.insertUser = async (user) => {
  return await User.create(user);
};

exports.updateUser = async (id, userDetails) => {
  return await User.update(id, userDetails);
};

exports.deleteUser = async (id) => {
  return await User.destroy({ where: { id } });
};
