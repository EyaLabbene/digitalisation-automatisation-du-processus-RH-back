const Meeting = require("../models/MeetingModel");

async function CreateMeeting(req, res, next) {
  try {
    const meeting = new Meeting(req.body);
    const savedMeeting = await meeting.save();
    return savedMeeting;
  } catch (error) {
    console.log(error);
    res.status(500).send(error.message);
  }
}
async function FindAllMeetings(req, res, next) {
  try {
    const meetings = await Meeting.find().populate([{ path: "employee" }]);
    return meetings;
  } catch (error) {
    console.log(error);
    res.status(500).send(error.message);
  }
}
async function FindSingleMeeting(req, res, next) {
  try {
    const meeting = await Meeting.findById(req.params.meetingId);
    if (!meeting) {
      res.status(404);
    }
    return meeting;
  } catch (error) {
    res.status(500).send(error.message);
  }
}
/*const Updatemeeting =async(req,res)=>{

    res.send('update')
}*/
/*const Deletemeeting =async(req,res)=>{
    res.send('delete')

}*/

async function UpdateMeeting(req, res, next) {
  try {
    const meeting = await Meeting.findByIdAndUpdate(
      req.params.meetingId,
      req.body,
      {
        new: true,
      }
    ).populate([{ path: "employee" }]);
    if (!meeting) {
      res.status(404);
    }
    return meeting;
  } catch (error) {
    res.status(500).send(error.message);
  }
}
async function FindMyMeetings(user) {
  try {
    // if (user.role === "candidate") {
    // Fetch interviews where interviewee is the current user
    const meetings = await Meeting.find({ employee: user._id }).populate([
      { path: "employee", select: "Username" },
    ]); //kifeh tconnecti f postman? wini requete authentification li temchi kenet temchi hedhika
    return meetings;
    // }
  } catch (error) {
    console.log(error);
    res.status(500).send(error.message);
  }
}
async function DeleteMeeting(req, res, next) {
  try {
    const meeting = await Meeting.findByIdAndDelete(req.params.meetingId);
    if (!meeting) {
      res.status(404);
    }
    return meeting;
  } catch (error) {
    res.status(500).send(error.message);
  }
}
module.exports = {
  CreateMeeting,
  FindAllMeetings,
  FindSingleMeeting,
  UpdateMeeting,
  FindMyMeetings,
  DeleteMeeting,
};
