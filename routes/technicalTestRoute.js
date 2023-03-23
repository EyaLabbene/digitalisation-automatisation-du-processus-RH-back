const express = require("express");
const TechTestController = require("../Controllers/TechnicalTestController");
// const authMiddleware = require("../middlewares/authentificationMiddleware");

const router = express.Router(); //router.use(authentificationMiddleware.authenticate);
router.post("/", TechTestController.addTechTest);
router.get("/", TechTestController.getAllTechTest);
router.get("/:techTestId", TechTestController.getSingleTechTest);
router.put("/:techTestId", TechTestController.updateTechTest);
router.delete("/:techTestId", TechTestController.deleteTechTest);

module.exports = router;
