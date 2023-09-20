const express = require("express");
const MeetingController = require("../Controllers/MeetingController");
const authMiddleware = require("../middlewares/authentificationMiddleware");

const router = express.Router();

//router.use(authentificationMiddleware.authenticate);

router.post(
  "/",
  authMiddleware.authenticateToken,
  MeetingController.addMeeting
);
router.get("/", MeetingController.getAllMeetings);
router.get(
  "/mine",
  authMiddleware.authenticateToken,
  MeetingController.getMyMeetings
);
router.get(
  "/:meetingId",
  authMiddleware.authenticateToken,
  MeetingController.getSingleMeeting
);
router.put(
  "/:meetingId",
  authMiddleware.authenticateToken,
  MeetingController.updateMeeting
);
router.delete(
  "/:meetingId",
  authMiddleware.authenticateToken,
  MeetingController.deleteMeeting
);

module.exports = router;
