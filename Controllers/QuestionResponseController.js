const questionResponseService = require("../services/questionResponseService");

async function addQuestionResponse(req, res, next) {
  try {
    const questionResponse =
      await questionResponseService.CreateQuestionResponse(req, res, next);
    res.status(201).json(questionResponse);
  } catch (error) {
    res.send(error);
  }
}

async function getAllQuestionResponses(req, res, next) {
  try {
    const questionResponses =
      await questionResponseService.FindAllQuestionResponses(req, res, next);
    res.json(questionResponses);
  } catch (error) {
    res.send("error");
  }
}

async function getSingleQuestionResponse(req, res, next) {
  try {
    /*console.log("khlat");
    console.log(req.params);*/
    const questionResponse =
      await questionResponseService.FindSingleQuestionResponse(req, res, next);
    res.json(questionResponse);
  } catch (error) {
    res.send(error.message);
  }
}
async function updateQuestionResponse(req, res, next) {
  try {
    const questionResponse =
      await questionResponseService.UpdateQuestionResponse(req, res, next);
    res.json(questionResponse);
  } catch (error) {
    res.send("error");
  }
}
async function compareAnswer(req, res, next) {
  try {
    const questionResponse = await questionResponseService.CompareAnswers(
      req.body.questionResponseId,
      req.body.currentAnswer
    );
    console.log(questionResponse);
    res.send(questionResponse);
  } catch (error) {
    res.send("error");
  }
}

async function deleteQuestionResponse(req, res, next) {
  try {
    const questionResponse =
      await questionResponseService.DeleteQuestionResponse(req, res, next);
    res.json(questionResponse);
  } catch (error) {
    res.send("error");
  }
}
module.exports = {
  addQuestionResponse,
  getAllQuestionResponses,
  getSingleQuestionResponse,
  updateQuestionResponse,
  deleteQuestionResponse,
  compareAnswer,
};
