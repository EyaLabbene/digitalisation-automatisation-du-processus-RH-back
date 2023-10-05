const interviewService = require("../services/interviewService");

async function addInterview(req, res, next) {
  try {
    const interview = await interviewService.CreateInterview(req, res, next);
    res.status(201).json(interview);
  } catch (error) {
    res.send(error);
  }
}

async function getAllInterviews(req, res, next) {
  try {
    const interviews = await interviewService.FindAllInterviews(req, res, next);
    res.json(interviews);
  } catch (error) {
    res.send("error");
  }
}
async function getMyInterviews(req, res, next) {
  try {
    const interviews = await interviewService.FindMyInterviews(req.user);
    res.json(interviews);
  } catch (error) {
    res.send("error");
  }
}
async function getMyEmpInterviews(req, res, next) {
  try {
    const interviews = await interviewService.FindMyEmpInterviews(req.user);
    res.json(interviews);
  } catch (error) {
    res.send("error");
  }
}
async function getSingleInterview(req, res, next) {
  try {
    const interview = await interviewService.FindSingleInterview(
      req,
      res,
      next
    );
    res.json(interview);
  } catch (error) {
    res.send(error.message);
  }
}

async function updateInterview(req, res, next) {
  try {
    const interview = await interviewService.UpdateInterview(req, res, next);
    res.json(interview);
  } catch (error) {
    res.send("error");
  }
}
async function accepterInterview(req, res, next) {
  try {
    const interview = await interviewService.AcceptInterview(req, res, next);
    res.json(interview);
  } catch (error) {
    res.send("error");
  }
}
async function RefuserInterview(req, res, next) {
  try {
    const interview = await interviewService.RefuseInterview(req, res, next);
    res.json(interview);
  } catch (error) {
    res.send("error");
  }
}

async function deleteInterview(req, res, next) {
  try {
    const interview = await interviewService.DeleteInterview(req, res, next);
    res.json(interview);
  } catch (error) {
    res.send("error");
  }
}

module.exports = {
  addInterview,
  accepterInterview,
  RefuserInterview,
  getAllInterviews,
  getSingleInterview,
  updateInterview,
  getMyEmpInterviews,
  deleteInterview,
  getMyInterviews,
};
