const QuestionResponse = require("../models/QuestionResponseModel");

async function CreateQuestionResponse(questionResponseData) {
  try {
    const questionResponse = new QuestionResponse(questionResponseData);
    const savedQuestionResponse = await questionResponse.save();
    return savedQuestionResponse;
  } catch (error) {
    console.log(error);
    throw new Error("Error creating questionResponse: " + error.message);
  }
}
async function FindAllQuestionResponses() {
  try {
    const questionResponses = await QuestionResponse.find();
    return questionResponses;
  } catch (error) {
    console.log(error);
    throw new Error("Error finding all questionResponses: " + error.message);
  }
}
async function FindSingleQuestionResponse(questionResponseId) {
  try {
    const questionResponse = await QuestionResponse.findById(
      questionResponseId
    );
    if (!questionResponse) {
      throw new Error("questionResponse not found");
    }
    return questionResponse;
  } catch (error) {
    throw new Error("Error finding  questionResponse: " + error.message);
  }
}
/*const UpdatequestionResponse =async(req,res)=>{

    res.send('update')
}*/
/*const DeletequestionResponse =async(req,res)=>{
    res.send('delete')

}*/

async function UpdateQuestionResponse(
  questionResponseId,
  questionResponseData
) {
  try {
    const questionResponse = await QuestionResponse.findByIdAndUpdate(
      questionResponseId,
      questionResponseData,
      {
        new: true,
      }
    );
    if (!questionResponse) {
      throw new Error("questionResponse not found");
    }
    return questionResponse;
  } catch (error) {
    throw new Error("Error updating questionResponse: " + error.message);
  }
}
async function DeleteQuestionResponse(questionResponseId) {
  try {
    const questionResponse = await QuestionResponse.findByIdAndDelete(
      questionResponseId
    );
    if (!questionResponse) {
      throw new Error("questionResponse not found");
    }
    return questionResponse;
  } catch (error) {
    throw new Error("Error deleting questionResponse: " + error.message);
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
