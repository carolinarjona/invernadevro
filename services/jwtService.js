const jwt = require("jsonwebtoken");

const validateToken = (token) => {
  return jwt.verify(token, process.env.SECRET_KEY);
};

const generateToken = (id, email, role) => {
  return jwt.sign({ id, email, role }, process.env.SECRET_KEY, {
    expiresIn: "1h",
  });
};

module.exports = { generateToken, validateToken };
