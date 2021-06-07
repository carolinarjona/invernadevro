const checkOwnership = (entity, user) => {
  return entity.UserId === user.id || user.role === "admin";
};

module.exports = checkOwnership;
