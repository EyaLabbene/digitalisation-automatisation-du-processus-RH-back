const meetingService = require("../services/meetingService");

async function addMeeting(req, res, next) {
  try {
    const meeting = await meetingService.CreateMeeting(req.body);
    res.status(201).json(meeting);
  } catch (error) {
    res.send(error);
  }
}
async function getAllMeetings(req, res, next) {
  try {
    const meetings = await meetingService.FindAllMeetings();
    res.json(meetings);
  } catch (error) {
    res.send("error");
  }
}

async function getSingleMeeting(req, res, next) {
  try {
    const meeting = await meetingService.FindSingleMeeting(
      req.params.meetingId
    );
    res.json(meeting);
  } catch (error) {
    res.send(error.message);
  }
}

async function updateMeeting(req, res, next) {
  try {
    const meeting = await meetingService.UpdateMeeting(
      req.params.meetingId,
      req.body
    );
    res.json(meeting);
  } catch (error) {
    res.send("error");
  }
}

async function deleteMeeting(req, res, next) {
  try {
    const meeting = await meetingService.DeleteMeeting(req.params.meetingId);
    res.json(meeting);
  } catch (error) {
    res.send("error");
  }
}

module.exports = {
  addMeeting,
  getAllMeetings,
  getSingleMeeting,
  updateMeeting,
  deleteMeeting,
};
