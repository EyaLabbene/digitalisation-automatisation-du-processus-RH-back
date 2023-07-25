const express = require("express");
const AuthentificationController = require("../Controllers/AuthentificationController");
const {
  authenticateToken,
} = require("../middlewares/authentificationMiddleware");
const router = express.Router();
const UserController = require("../controllers/UserController");

router.post("/", AuthentificationController.login);

module.exports = router;