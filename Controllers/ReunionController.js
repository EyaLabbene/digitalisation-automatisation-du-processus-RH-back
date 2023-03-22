const reunionService = require("../services/reunionService");

async function addReunion(req, res, next) {
  try {
    const reunion = await reunionService.CreateReunion(req.body);
    res.status(201).json(reunion);
  } catch (error) {
    res.send(error);
  }
}
async function getAllReunions(req, res, next) {
  try {
    const reunions = await reunionService.FindAllReunions();
    res.json(reunions);
  } catch (error) {
    res.send("error");
  }
}

async function getSingleReunion(req, res, next) {
  try {
    const reunion = await reunionService.FindSingleReunion(
      req.params.reunionId
    );
    res.json(reunion);
  } catch (error) {
    res.send("error");
  }
}

async function updateReunion(req, res, next) {
  try {
    const reunion = await reunionService.UpdateReunion(
      req.params.reunionId,
      req.body
    );
    res.json(reunion);
  } catch (error) {
    res.send("error");
  }
}

async function deleteReunion(req, res, next) {
  try {
    const reunion = await reunionService.DeleteReunion(req.params.reunionId);
    res.json(reunion);
  } catch (error) {
    res.send("error");
  }
}

module.exports = {
  addReunion,
  getAllReunions,
  getSingleReunion,
  updateReunion,
  deleteReunion,
};
