const checkOwnership = (entity, user) => {
  return entity.userId === user.userId || user.role === "admin";
};

module.exports = checkOwnership;
