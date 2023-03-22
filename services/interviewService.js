const Interview = require("../models/InterviewModel");

async function CreateInterview(interviewData) {
  try {
    const interview = new Interview(interviewData);
    const savedInterview = await interview.save();
    return savedInterview;
  } catch (error) {
    console.log(error);
    throw new Error("Error creating interview: " + error.message);
  }
}
async function FindAllInterviews() {
  try {
    const interviews = await Interview.find();
    return interviews;
  } catch (error) {
    console.log(error);
    throw new Error("Error finding all interviews: " + error.message);
  }
}
async function FindSingleInterview(interviewId, interviewData) {
  try {
    const interview = await Interview.findById(interviewId, interviewData, {
      new: true,
    });
    if (!interview) {
      throw new Error("interview not found");
    }
    return interview;
  } catch (error) {
    throw new Error("Error finding  interview: " + error.message);
  }
}
/*const Updateinterview =async(req,res)=>{

    res.send('update')
}*/
/*const Deleteinterview =async(req,res)=>{
    res.send('delete')

}*/

async function UpdateInterview(interviewId, interviewData) {
  try {
    const interview = await Interview.findByIdAndUpdate(
      interviewId,
      interviewData,
      { new: true }
    );
    if (!interview) {
      throw new Error("interview not found");
    }
    return interview;
  } catch (error) {
    throw new Error("Error updating interview: " + error.message);
  }
}
async function DeleteInterview(interviewId) {
  try {
    const interview = await Interview.findByIdAndDelete(interviewId);
    if (!interview) {
      throw new Error("interview not found");
    }
    return interview;
  } catch (error) {
    throw new Error("Error deleting interview: " + error.message);
  }
}
module.exports = {
  CreateInterview,
  FindAllInterviews,
  FindSingleInterview,
  UpdateInterview,
  DeleteInterview,
};
