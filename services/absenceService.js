const Absence = require("../models/AbsenceModel");

async function CreateAbsence(req, res, next) {
  try {
    const absence = new Absence(req.body);
    const savedAbsence = await absence.save();
    return savedAbsence;
  } catch (error) {
    console.log(error);
    res.status(500).send(error.message);
  }
}
async function FindAllAbsences(req, res, next) {
  try {
    const absences = await Absence.find();
    return absences;
  } catch (error) {
    console.log(error);
    res.status(500).send(error.message);
  }
}
async function FindSingleAbsence(req, res, next) {
  try {
    const absence = await Absence.findById(req.params.absenceId);
    if (!absence) {
      res.status(404);
    }
    return absence;
  } catch (error) {
    res.status(500).send(error.message);
  }
}
/*const Updateabsence =async(req,res)=>{

    res.send('update')
}*/
/*const Deleteabsence =async(req,res)=>{
    res.send('delete')

}*/

async function UpdateAbsence(req, res, next) {
  try {
    const absence = await Absence.findByIdAndUpdate(
      req.params.absenceId,
      req.body,
      {
        new: true,
      }
    );
    if (!absence) {
      res.status(404);
    }
    return absence;
  } catch (error) {
    res.status(500).send(error.message);
  }
}
async function DeleteAbsence(req, res, next) {
  try {
    const absence = await Absence.findByIdAndDelete(req.params.absenceId);
    if (!absence) {
      res.status(404);
    }
    return absence;
  } catch (error) {
    res.status(500).send(error.message);
  }
}
module.exports = {
  CreateAbsence,
  FindAllAbsences,
  FindSingleAbsence,
  UpdateAbsence,
  DeleteAbsence,
};
