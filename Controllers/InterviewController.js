const interviewService = require("../services/interviewService");

async function addInterview(req, res, next) {
  try {
    const interview = await interviewService.CreateInterview(req.body);
    res.status(201).json(interview);
  } catch (error) {
    res.send(error);
  }
}

async function getAllInterviews(req, res, next) {
  try {
    const interviews = await interviewService.FindAllInterviews();
    res.json(interviews);
  } catch (error) {
    res.send("error");
  }
}

async function getSingleInterview(req, res, next) {
  try {
    const interview = await interviewService.FindSingleInterview(
      req.params.interviewId
    );
    res.json(interview);
  } catch (error) {
    res.send("error");
  }
}

async function updateInterview(req, res, next) {
  try {
    const interview = await interviewService.UpdateInterview(
      req.params.interviewId,
      req.body
    );
    res.json(interview);
  } catch (error) {
    res.send("error");
  }
}

async function deleteInterview(req, res, next) {
  try {
    const interview = await interviewService.DeleteInterview(
      req.params.interviewId
    );
    res.json(interview);
  } catch (error) {
    res.send("error");
  }
}

module.exports = {
  addInterview,
  getAllInterviews,
  getSingleInterview,
  updateInterview,
  deleteInterview,
};
