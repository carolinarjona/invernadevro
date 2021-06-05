const User = require("../models/User");

exports.findAllUsers = async () => {
  return await User.findAll();
};

exports.findUserById = async (userId) => {
  return await User.findOne({ where: { userId } });
};

exports.findUserWithPasswordByEmail = async (email) => {
  return await User.scope("withPassword").findOne({ where: { email } });
};

exports.insertUser = async (user) => {
  return await User.create(user);
};

exports.updateUser = async (userId, userDetails) => {
  return await User.update(userId, userDetails);
};

exports.deleteUser = async (userId) => {
  return await User.destroy({ where: { userId } });
};
