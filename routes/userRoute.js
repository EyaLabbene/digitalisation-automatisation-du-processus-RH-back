const express = require("express");
const userController = require("../Controllers/UserController");
const {
  authenticateToken,
} = require("../middlewares/authentificationMiddleware");
const router = express.Router();

router.post("/", userController.addUser);
router.get("/", userController.getAllUsers);
router.get("/candidate", userController.getAllCandidateUsers);

router.get("/:userId", authenticateToken, userController.getSingleUser);
router.put("/:userId", userController.updateUser);
router.delete("/:userId", userController.deleteUser);

module.exports = router;
