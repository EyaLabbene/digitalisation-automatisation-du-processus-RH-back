const absenceService = require("../services/absenceService");

async function addAbsence(req, res, next) {
  try {
    const absence = await absenceService.CreateAbsence(req.body);
    res.status(201).json(absence);
  } catch (error) {
    next(error);
  }
}

async function getAllAbsences(req, res, next) {
  try {
    const absences = await absenceService.FindAllAbsences();
    res.json(absences);
  } catch (error) {
    next(error);
  }
}

async function getSingleAbsence(req, res, next) {
  try {
    const absence = await absenceService.FindSingleAbsence(
      req.params.absenceId
    );
    res.json(absence);
  } catch (error) {
    next(error);
  }
}

async function updateAbsence(req, res, next) {
  try {
    const absence = await absenceService.UpdateAbsence(
      req.params.absenceId,
      req.body
    );
    res.json(absence);
  } catch (error) {
    next(error);
  }
}

async function deleteAbsence(req, res, next) {
  try {
    const absence = await absenceService.DeleteAbsence(req.params.absenceId);
    res.json(absence);
  } catch (error) {
    next(error);
  }
}

module.exports = {
  addAbsence,
  getAllAbsences,
  getSingleAbsence,
  updateAbsence,
  deleteAbsence,
};
