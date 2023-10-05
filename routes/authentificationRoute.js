const express = require("express");
const AuthentificationController = require("../Controllers/AuthentificationController");
const {
  authenticateToken,
} = require("../middlewares/authentificationMiddleware");
const router = express.Router();

router.post(
  "/",
  (req, res, next) => {
    console.log("t3adit");
    next();
  },
  AuthentificationController.login
);

module.exports = router;
