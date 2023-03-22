const express = require("express");
const MeetingController = require("../Controllers/MeetingController");
//const authMiddleware = require("../middlewares/authentificationMiddleware");

const router = express.Router();

//router.use(authentificationMiddleware.authenticate);

router.post("/", MeetingController.addMeeting);
router.get("/", MeetingController.getAllMeetings);
router.get("/:meetingId", MeetingController.getSingleMeeting);
router.put("/:meetingId", MeetingController.updateMeeting);
router.delete("/:meetingId", MeetingController.deleteMeeting);

module.exports = router;
