const express = require("express");
const LeaveController = require("../Controllers/LeaveController");
//const authMiddleware = require('../middlewares/authentificationMiddleware');

const router = express.Router();

//router.use(authentificationMiddleware.authenticate);

router.post("/", LeaveController.addLeave);
router.get("/", LeaveController.getAllLeaves);
router.get("/:leaveId", LeaveController.getSingleLeave);
router.put("/:leaveId", LeaveController.updateLeave);
router.delete("/:leaveId", LeaveController.deleteLeave);

module.exports = router;
