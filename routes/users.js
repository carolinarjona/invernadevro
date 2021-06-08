var express = require("express");
const roleValidation = require("../middleware/roleValidation");
var router = express.Router();
const userService = require("../services/userService");

router.get("/all", roleValidation("user"), async (req, res, next) => {
  try {
    const users = await userService.getAllProfiles(req.user);
    res.status(200).json(users);
  } catch (error) {
    next(error);
  }
});

router.get("/:id", roleValidation("user"), async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await userService.getProfile(id, req.user);
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
});

router.post("/signup", async (req, res, next) => {
  try {
    await userService.signup(req.body);
    res.sendStatus(201);
  } catch (error) {
    next(error);
  }
});

router.post("/login", async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await userService.login(email, password);
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
});

router.put("/", roleValidation("user"), async (req, res, next) => {
  try {
    await userService.editProfile(req.user, req.body);
    res.sendStatus(204);
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", roleValidation("user"), async (req, res, next) => {
  try {
    const { id } = req.params;
    await userService.deleteUserById(id, req.user);
    res.sendStatus(204);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
