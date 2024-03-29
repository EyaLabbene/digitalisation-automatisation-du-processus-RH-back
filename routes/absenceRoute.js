const express = require("express");
const AbsenceController = require("../Controllers/AbsenceController");
//const authMiddleware = require("../middlewares/authentificationMiddleware");

const router = express.Router();

//router.use(authentificationMiddleware.authenticate);

router.post("/", AbsenceController.addAbsence);
router.get("/", AbsenceController.getAllAbsences);
router.get("/:absenceId", AbsenceController.getSingleAbsence);
router.put("/:absenceId", AbsenceController.updateAbsence);
router.delete("/:absenceId", AbsenceController.deleteAbsence);

module.exports = router;
