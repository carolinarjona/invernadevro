const userRepository = require("../repositories/userRepository");
const encryptPass = require("../util/encryptPass");
const { generateToken } = require("../services/jwtService");
const {
  insertUserSchema,
  updateUserSchema,
} = require("../validations/userValidation");
const HttpError = require("../util/httpError");

exports.signup = async (userDetails) => {
  const validationUser = await insertUserSchema.validateAsync(userDetails);
  const encryptedPassword = await encryptPass(userDetails.password);

  await userRepository.insertUser({
    ...validationUser,
    password: encryptedPassword,
  });
};

exports.login = async (email, password) => {
  if (!email || !password) {
    throw new HttpError(400, "You forgot enter email or password!");
  }

  const user = await userRepository.findUserWithPasswordByEmail(email);
  if (!user) throw new HttpError(400, "That user doens't exist!");

  const encryptedPassword = await encryptPass(password);
  if (user.password !== encryptedPassword) {
    throw new HttpError(400, "Your password is incorrect!");
  }

  const token = generateToken(user.id, user.email, user.role);
  return token;
};

exports.getProfile = async (id) => {
  if (!id) throw new HttpError(400, "That user doens't exist!");
  const user = await userRepository.findUserById(id);
  return user.toJSON();
};

exports.getAllProfiles = async () => {
  return await userRepository.findAllUsers();
};

exports.editProfile = async ({ id }, userDetails) => {
  if (!id) throw new HttpError(400, "That user doens't exist!");
  await updateUserSchema.validateAsync(userDetails);
  await userRepository.updateUser(userDetails, { where: { id } });
};

exports.deleteUserById = async (id) => {
  if (!id) throw new HttpError(400, "That user doesn't exist!");
  await userRepository.deleteUser(id);
};
