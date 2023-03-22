const express = require("express");
const ResultController = require("../Controllers/ResultController");
//const authMiddleware = require('../middlewares/authentificationMiddleware');

const router = express.Router();

//router.use(authentificationMiddleware.authenticate);

router.post("/", ResultController.addResult);
router.get("/", ResultController.getAllResults);
router.get("/:resultId", ResultController.getSingleResult);
router.put("/:resultId", ResultController.updateResult);
router.delete("/:resultId", ResultController.deleteResult);

module.exports = router;
