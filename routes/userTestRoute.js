const express = require("express");
const UserTestController = require("../Controllers/UserTestController");
const authMiddleware = require("../middlewares/authentificationMiddleware");

const router = express.Router();

//router.use(authentificationMiddleware.authenticate);

router.post(
  "/",
  authMiddleware.authenticateToken,
  UserTestController.addUserTest
);
router.get(
  "/",
  authMiddleware.authenticateToken,
  UserTestController.getAllUserTests
);
router.get(
  "/mine",
  authMiddleware.authenticateToken,
  UserTestController.getMyUserTests
);
router.get(
  "/:userTestId",
  authMiddleware.authenticateToken,
  UserTestController.getSingleUserTest
);
router.put(
  "/:userTestId",
  authMiddleware.authenticateToken,
  UserTestController.updateUserTest
);
router.delete(
  "/:userTestId",
  authMiddleware.authenticateToken,
  UserTestController.deleteUserTest
);

module.exports = router;
