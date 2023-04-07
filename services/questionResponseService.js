const QuestionResponse = require("../models/QuestionResponseModel");

async function CreateQuestionResponse(req, res, next) {
  try {
    const questionResponse = new QuestionResponse(req.body);
    const savedQuestionResponse = await questionResponse.save();
    return savedQuestionResponse;
  } catch (error) {
    console.log(error);
    res.status(500).send(error.message);
  }
}
async function FindAllQuestionResponses(req, res, next) {
  try {
    const questionResponses = await QuestionResponse.find();
    return questionResponses;
  } catch (error) {
    console.log(error);
    console.log(error);
    res.status(500).send(error.message);
  }
}
async function FindSingleQuestionResponse(req, res, next) {
  try {
    const questionResponse = await QuestionResponse.findById(
      req.params.questionResponseId
    );
    if (!questionResponse) {
      res.status(404);
    }
    return questionResponse;
  } catch (error) {
    console.log(error);
    res.status(500).send(error.message);
  }
}
/*const UpdatequestionResponse =async(req,res)=>{

    res.send('update')
}*/
/*const DeletequestionResponse =async(req,res)=>{
    res.send('delete')

}*/

async function UpdateQuestionResponse(req, res, next) {
  try {
    const questionResponse = await QuestionResponse.findByIdAndUpdate(
      req.params.questionResponseId,
      req.body,
      {
        new: true,
      }
    );
    if (!questionResponse) {
      res.status(404);
    }
    return questionResponse;
  } catch (error) {
    console.log(error);
    res.status(500).send(error.message);
  }
}
async function DeleteQuestionResponse(req, res, next) {
  try {
    const questionResponse = await QuestionResponse.findByIdAndDelete(
      req.params.questionResponseId
    );
    if (!questionResponse) {
      res.status(404);
    }
    return questionResponse;
  } catch (error) {
    console.log(error);
    res.status(500).send(error.message);
  }
}
async function CompareAnswers(questionResponseId, currentAnswer) {
  try {
    const questionResponse = await FindSingleQuestionResponse(
      questionResponseId
    );
    console.log(questionResponse);
    if (
      currentAnswer.toLowerCase() === questionResponse.good_answer.toLowerCase()
    ) {
      return true;
    } else {
      return false;
    }
  } catch {}
}
module.exports = {
  CreateQuestionResponse,
  FindAllQuestionResponses,
  FindSingleQuestionResponse,
  UpdateQuestionResponse,
  DeleteQuestionResponse,
  CompareAnswers,
};
