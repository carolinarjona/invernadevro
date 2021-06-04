const userRepository = require("../repositories/userRepository");
const encryptPass = require("../util/encryptPass");
const { generateToken } = require("../services/jwtService");

exports.signup = async (userDetails) => {
  if (!userDetails.password || !userDetails.email) {
    throw new Error("You forgot enter email or password!");
  }
  userDetails.password = await encryptPass(userDetails.password);
  await userRepository.insertUser(userDetails);
};

exports.login = async (email, password) => {
  if (!email || !password) {
    throw new Error("You forgot enter email or password!");
  }

  const user = await userRepository.findUserWithPasswordByEmail(email);
  if (!user) throw new Error("That user doens't exist!");

  const encryptedPassword = await encryptPass(password);
  if (user.password !== encryptedPassword) {
    throw new Error("Your password is incorrect!");
  }

  const token = generateToken(user.id, user.email, user.role);
  return token;
};

exports.getProfile = async (email) => {
  const user = await userRepository.findUserByEmail(email);
  return user.toJSON();
};

exports.getAllProfiles = async () => {
  return await userRepository.findAllUsers();
};

exports.editProfile = async (id, userDetails) => {
  await userRepository.updateUser(id, userDetails);
};

exports.deleteUserById = async (id) => {
  await userRepository.deleteUser(id);
};
