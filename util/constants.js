exports.ROLE = Object.freeze({
  USER: "user",
  ADMIN: "admin",
});

exports.ERRORS = Object.freeze({
  NO_PLANT: "That plant doesn't exist!",
  CANT_DO: "You can't do that!",
  NO_USER: "That user doesn't exist!",
  INCORRECT_PASS: "Your password is incorrect!",
  EMAIL_PASS: "You forgot enter email or password!",
  NO_PLANTPOT: "That plantpot doesn' exist!",
});

exports.LIGHT_LEVEL = Object.freeze({
  TBD: "TBD",
  LOW: "low",
  MEDIUM: "medium",
  BRIGHT: "bright",
});

exports.DIFFICULTY = Object.freeze({
  TBD: "TBD",
  BEGINNER: "beginner",
  INTERMEDIATE: "intermediate",
  EXPERT: "expert",
});

exports.WATERING_FREQUENCY = Object.freeze({
  TBD: "TBD",
  DAILY: "daily",
  TWICE_A_WEEK: "twice a week",
  ONCE_A_WEEK: "once a week",
  BIWEEKLY: "biweekly",
});

exports.STATUS = Object.freeze({
  ALIVE: "alive",
  WILTED: "wilted",
  DORMANT: "dormant",
  DEAD: "dead",
});
