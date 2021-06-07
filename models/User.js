const { DataTypes } = require("sequelize");
const dbInvernadevro = require("../config/dbInvernadevro");
const { ROLE } = require("../util/constants");

const User = dbInvernadevro.define(
  "User",
  {
    userId: {
      primaryKey: true,
      allowNull: false,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
    },
    email: {
      type: DataTypes.STRING(25),
    },
    password: {
      type: DataTypes.STRING(35),
    },
    username: {
      type: DataTypes.STRING(35),
    },
    full_name: {
      type: DataTypes.STRING(64),
    },
    biography: {
      type: DataTypes.TEXT,
    },
    social_network: {
      type: DataTypes.STRING(64),
    },
    role: {
      type: DataTypes.STRING(10),
      defaultValue: ROLE.USER,
    },
    avatar_image_path: {
      type: DataTypes.TEXT,
    },
  },
  {
    defaultScope: { attributes: { exclude: ["password"] } },
    scopes: { withPassword: { attributes: {} } },
  }
);

User.prototype.toJSON = function () {
  const attributes = Object.assign({}, this.get());
  delete attributes.password;
  return attributes;
};

module.exports = User;
