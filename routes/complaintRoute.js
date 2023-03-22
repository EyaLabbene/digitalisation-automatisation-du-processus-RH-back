const express = require("express");
const ComplaintController = require("../Controllers/ComplaintController");
//const authMiddleware = require('../middlewares/authentificationMiddleware');

const router = express.Router();

//router.use(authentificationMiddleware.authenticate);

router.post("/", ComplaintController.addComplaint);
router.get("/", ComplaintController.getAllComplaints);
router.get("/:complaintId", ComplaintController.getSingleComplaint);
router.put("/:complaintId", ComplaintController.updateComplaint);
router.delete("/:complaintId", ComplaintController.deleteComplaint);

module.exports = router;
