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
  getAllInterviews,
  getSingleInterview,
  updateInterview,
  deleteInterview,
};
