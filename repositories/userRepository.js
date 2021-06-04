const User = require("../models/User");

exports.findAllUsers = async () => {
  return await User.findAll();
};

exports.findUserByEmail = async (email) => {
  return await User.findOne({ where: { email } });
};

exports.findUserWithPasswordByEmail = async (email) => {
  return await User.scope("withPassword").findOne({ where: { email } });
};

exports.insertUser = async (user) => {
  return await User.create(user);
};

exports.updateUser = async (id, userDetails) => {
  return await User.update(userDetails, { where: { id } });
};

exports.deleteUser = async () => {
  return await User.destroy({ where: { id } });
};
