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
    const meetings = await Meeting.find();
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
    );
    if (!meeting) {
      res.status(404);
    }
    return meeting;
  } catch (error) {
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
  DeleteMeeting,
};
