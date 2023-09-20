const meetingService = require("../services/meetingService");

async function addMeeting(req, res, next) {
  try {
    const meeting = await meetingService.CreateMeeting(req, res, next);
    res.status(201).json(meeting);
  } catch (error) {
    res.send(error);
  }
}
async function getAllMeetings(req, res, next) {
  try {
    const meetings = await meetingService.FindAllMeetings(req, res, next);
    res.json(meetings);
  } catch (error) {
    res.send("error");
  }
}
async function getMyMeetings(req, res, next) {
  try {
    const meetings = await meetingService.FindMyMeetings(req.user);
    res.json(meetings);
  } catch (error) {
    res.send("error");
  }
}

async function getSingleMeeting(req, res, next) {
  try {
    const meeting = await meetingService.FindSingleMeeting(req, res, next);
    res.json(meeting);
  } catch (error) {
    res.send(error.message);
  }
}

async function updateMeeting(req, res, next) {
  try {
    const meeting = await meetingService.UpdateMeeting(req, res, next);
    res.json(meeting);
  } catch (error) {
    res.send("error");
  }
}

async function deleteMeeting(req, res, next) {
  try {
    const meeting = await meetingService.DeleteMeeting(req, res, next);
    res.json(meeting);
  } catch (error) {
    res.send("error");
  }
}

module.exports = {
  addMeeting,
  getMyMeetings,
  getAllMeetings,
  getSingleMeeting,
  updateMeeting,
  deleteMeeting,
};
