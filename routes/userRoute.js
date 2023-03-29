const express = require("express");
const userController = require("../Controllers/UserController");
const authMiddleware = require("../middlewares/authentificationMiddleware");
const router = express.Router();
// router.use(authentificationMiddleware.authenticate);
router.post("/", userController.addUser);
router.get("/", userController.getAllUsers);
router.get("/:userId", userController.getSingleUser);
router.put("/:userId", userController.updateUser);
router.delete("/:userId", userController.deleteUser);

module.exports = router;
