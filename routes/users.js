var express = require("express");
const roleValidation = require("../middleware/roleValidation");
var router = express.Router();
const userService = require("../services/userService");

router.get("/all", roleValidation("user"), async (req, res) => {
  try {
    const users = await userService.getAllProfiles(req.user);
    res.status(200).json(users);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.get("/:id", roleValidation("user"), async (req, res) => {
  try {
    const { id } = req.params;
    const user = await userService.getProfile(id, req.user);
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.post("/signup", async (req, res) => {
  try {
    await userService.signup(req.body);
    res.sendStatus(201);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await userService.login(email, password);
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.put("/", roleValidation("user"), async (req, res) => {
  try {
    await userService.editProfile(req.user, req.body);
    res.sendStatus(204);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.delete("/:userId", roleValidation("user"), async (req, res) => {
  try {
    const { userId } = req.params;
    await userService.deleteUserById(userId, req.user);
    res.sendStatus(204);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
