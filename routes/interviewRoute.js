const express = require("express");
const InterviewController = require("../Controllers/InterviewController");
const authMiddleware = require("../middlewares/authentificationMiddleware");

const router = express.Router();

//router.use(authentificationMiddleware.authenticate);

router.post(
  "/",
  authMiddleware.authenticateToken,
  InterviewController.addInterview
);
router.get(
  "/",
  authMiddleware.authenticateToken,
  InterviewController.getAllInterviews
);
router.get(
  "/mine",
  authMiddleware.authenticateToken,
  InterviewController.getMyInterviews
);
router.get(
  "/mine2",
  authMiddleware.authenticateToken,
  InterviewController.getMyEmpInterviews
);
router.get(
  "/:interviewId",
  authMiddleware.authenticateToken,
  InterviewController.getSingleInterview
);
router.put(
  "/:interviewId",
  authMiddleware.authenticateToken,
  InterviewController.updateInterview
);
router.delete(
  "/:interviewId",
  authMiddleware.authenticateToken,
  InterviewController.deleteInterview
);

module.exports = router;
