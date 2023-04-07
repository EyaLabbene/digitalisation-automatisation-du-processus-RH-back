const express = require("express");
const AuthentificationController = require("../Controllers/AuthentificationController");
const router = express.Router();

router.get("/", AuthentificationController.login);

module.exports = router;
