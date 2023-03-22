const express = require("express");
const ReunionController = require("../Controllers/ReunionController");
//const authMiddleware = require("../middlewares/authentificationMiddleware");

const router = express.Router();

//router.use(authentificationMiddleware.authenticate);

router.post("/", ReunionController.addReunion);
router.get("/", ReunionController.getAllReunions);
router.get("/:reunionId", ReunionController.getSingleReunion);
router.put("/:reunionId", ReunionController.updateReunion);
router.delete("/:reunionId", ReunionController.deleteReunion);

module.exports = router;
