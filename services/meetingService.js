const Meeting = require("../models/MeetingModel");

async function CreateMeeting(meetingData) {
  try {
    const meeting = new Meeting(meetingData);
    const savedMeeting = await meeting.save();
    return savedMeeting;
  } catch (error) {
    console.log(error);
    throw new Error("Error creating meeting: " + error.message);
  }
}
async function FindAllMeetings() {
  try {
    const meetings = await Meeting.find();
    return meetings;
  } catch (error) {
    console.log(error);
    throw new Error("Error finding all meetings: " + error.message);
  }
}
async function FindSingleMeeting(meetingId, meetingData) {
  try {
    const meeting = await Meeting.findById(meetingId, meetingData, {
      new: true,
    });
    if (!meeting) {
      throw new Error("meeting not found");
    }
    return meeting;
  } catch (error) {
    throw new Error("Error finding  meeting: " + error.message);
  }
}
/*const Updatemeeting =async(req,res)=>{

    res.send('update')
}*/
/*const Deletemeeting =async(req,res)=>{
    res.send('delete')

}*/

async function UpdateMeeting(meetingId, meetingData) {
  try {
    const meeting = await Meeting.findByIdAndUpdate(meetingId, meetingData, {
      new: true,
    });
    if (!meeting) {
      throw new Error("meeting not found");
    }
    return meeting;
  } catch (error) {
    throw new Error("Error updating meeting: " + error.message);
  }
}
async function DeleteMeeting(meetingId) {
  try {
    const meeting = await Meeting.findByIdAndDelete(meetingId);
    if (!meeting) {
      throw new Error("meeting not found");
    }
    return meeting;
  } catch (error) {
    throw new Error("Error deleting meeting: " + error.message);
  }
}
module.exports = {
  CreateMeeting,
  FindAllMeetings,
  FindSingleMeeting,
  UpdateMeeting,
  DeleteMeeting,
};
