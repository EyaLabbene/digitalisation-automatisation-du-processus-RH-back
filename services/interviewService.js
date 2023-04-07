const Interview = require("../models/InterviewModel");

async function CreateInterview(req, res, next) {
  try {
    const interview = new Interview(req.body);
    const savedInterview = await interview.save();
    return savedInterview;
  } catch (error) {
    console.log(error);
    res.status(500).send(error.message);
  }
}
async function FindAllInterviews(req, res, next) {
  try {
    const interviews = await Interview.find();
    return interviews;
  } catch (error) {
    console.log(error);
    res.status(500).send(error.message);
  }
}
async function FindSingleInterview(req, res, next) {
  try {
    const interview = await Interview.findById(req.params.interviewId);
    if (!interview) {
      res.status(404);
    }
    return interview;
  } catch (error) {
    res.status(500).send(error.message);
  }
}
/*const Updateinterview =async(req,res)=>{

    res.send('update')
}*/
/*const Deleteinterview =async(req,res)=>{
    res.send('delete')

}*/

async function UpdateInterview(req, res, next) {
  try {
    const interview = await Interview.findByIdAndUpdate(
      req.params.interviewId,
      req.body,
      { new: true }
    );
    if (!interview) {
      res.status(404);
    }
    return interview;
  } catch (error) {
    res.status(500).send(error.message);
  }
}
async function DeleteInterview(req, res, next) {
  try {
    const interview = await Interview.findByIdAndDelete(req.params.interviewId);
    if (!interview) {
      res.status(404);
    }
    return interview;
  } catch (error) {
    res.status(500).send(error.message);
  }
}
module.exports = {
  CreateInterview,
  FindAllInterviews,
  FindSingleInterview,
  UpdateInterview,
  DeleteInterview,
};
