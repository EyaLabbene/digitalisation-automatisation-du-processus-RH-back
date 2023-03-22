const express = require("express");
const InterviewController = require("../Controllers/InterviewController");
//const authMiddleware = require('../middlewares/authentificationMiddleware');

const router = express.Router();

//router.use(authentificationMiddleware.authenticate);

router.post("/", InterviewController.addInterview);
router.get("/", InterviewController.getAllInterviews);
router.get("/:interviewId", InterviewController.getSingleInterview);
router.put("/:interviewId", InterviewController.updateInterview);
router.delete("/:interviewId", InterviewController.deleteInterview);

module.exports = router;
