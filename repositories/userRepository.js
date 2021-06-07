const User = require("../models/User");

exports.findAllUsers = async () => {
  return await User.findAll();
};

exports.findUserById = async (id) => {
  return await User.findOne({ where: { id } });
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
