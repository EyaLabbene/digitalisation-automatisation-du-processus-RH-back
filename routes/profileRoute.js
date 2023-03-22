const express = require("express");
const ProfileController = require("../Controllers/ProfileController");
//const authMiddleware = require('../middlewares/authentificationMiddleware');

const router = express.Router();

//router.use(authentificationMiddleware.authenticate);

router.post("/", ProfileController.addProfile);
router.get("/", ProfileController.getAllProfiles);
router.get("/:profileId", ProfileController.getSingleProfile);
router.put("/:profileId", ProfileController.updateProfile);
router.delete("/:profileId", ProfileController.deleteProfile);

module.exports = router;
