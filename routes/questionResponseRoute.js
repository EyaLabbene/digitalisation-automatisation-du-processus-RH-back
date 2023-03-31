const express = require("express");
const QuestionResponseController = require("../Controllers/QuestionResponseController");
//const authMiddleware = require('../middlewares/authentificationMiddleware');

const router = express.Router();

//router.use(authentificationMiddleware.authenticate);

router.post("/", QuestionResponseController.addQuestionResponse);
router.post("/compareAnswers", QuestionResponseController.compareAnswer);
router.get("/", QuestionResponseController.getAllQuestionResponses);
router.get(
  "/:questionResponseId",
  QuestionResponseController.getSingleQuestionResponse
);

router.put(
  "/:questionResponseId",
  QuestionResponseController.updateQuestionResponse
);
router.delete(
  "/:questionResponseId",
  QuestionResponseController.deleteQuestionResponse
);

module.exports = router;
