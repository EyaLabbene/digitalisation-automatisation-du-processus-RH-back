const Interview = require("../models/InterviewModel");
const User = require("../models/UserModel");
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
    const interviews = await Interview.find().populate([
      { path: "interviewer", select: "Username" },
      "interviewee",
    ]);
    return interviews;
  } catch (error) {
    console.log(error);
    res.status(500).send(error.message);
  }
}
async function FindMyInterviews(user) {
  try {
    // if (user.role === "candidate") {
    // Fetch interviews where interviewee is the current user
    const interviews = await Interview.find({ interviewee: user._id }).populate(
      [{ path: "interviewer", select: "Username" }]
    ); //kifeh tconnecti f postman? wini requete authentification li temchi kenet temchi hedhika
    return interviews;
    // }
  } catch (error) {
    console.log(error);
    res.status(500).send(error.message);
  }
}
async function FindMyEmpInterviews(user) {
  try {
    // if (user.role === "candidate") {
    // Fetch interviews where interviewee is the current user
    const interviews = await Interview.find({ interviewer: user._id }).populate(
      [{ path: "interviewee", select: "Username" }]
    ); //kifeh tconnecti f postman? wini requete authentification li temchi kenet temchi hedhika
    return interviews;
    // }
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
    ).populate([{ path: "interviewer", select: "Username" }, "interviewee"]);
    if (!interview) {
      res.status(404);
    }
    return interview;
  } catch (error) {
    res.status(500).send(error.message);
  }
}
async function AcceptInterview(req, res, next) {
  try {
    const interview = await Interview.findByIdAndUpdate(
      req.params.interviewId,
      req.body,
      { new: true }
    ).populate([{ path: "interviewer", select: "Username" }, "interviewee"]);
    if (!interview) {
      res.status(404);
    }
    return interview;
  } catch (error) {
    res.status(500).send(error.message);
  }
}
async function RefuseInterview(req, res, next) {
  try {
    const interview = await Interview.findByIdAndUpdate(
      req.params.interviewId,
      req.body,
      { new: true }
    ).populate([{ path: "interviewer", select: "Username" }, "interviewee"]);
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
  RefuseInterview,
  AcceptInterview,
  FindMyEmpInterviews,
  FindSingleInterview,
  UpdateInterview,
  DeleteInterview,
  FindMyInterviews,
};
