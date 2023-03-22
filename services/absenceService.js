const Absence = require("../models/AbsenceModel");

async function CreateAbsence(absenceData) {
  try {
    const absence = new Absence(absenceData);
    const savedAbsence = await absence.save();
    return savedAbsence;
  } catch (error) {
    console.log(error);
    throw new Error("Error creating absence: " + error.message);
  }
}
async function FindAllAbsences() {
  try {
    const absences = await Absence.find();
    return absences;
  } catch (error) {
    console.log(error);
    throw new Error("Error finding all absences: " + error.message);
  }
}
async function FindSingleAbsence(absenceId, absenceData) {
  try {
    const absence = await Absence.findById(absenceId, absenceData, {
      new: true,
    });
    if (!absence) {
      throw new Error("absence not found");
    }
    return absence;
  } catch (error) {
    throw new Error("Error finding  absence: " + error.message);
  }
}
/*const Updateabsence =async(req,res)=>{

    res.send('update')
}*/
/*const Deleteabsence =async(req,res)=>{
    res.send('delete')

}*/

async function UpdateAbsence(absenceId, absenceData) {
  try {
    const absence = await Absence.findByIdAndUpdate(absenceId, absenceData, {
      new: true,
    });
    if (!absence) {
      throw new Error("absence not found");
    }
    return absence;
  } catch (error) {
    throw new Error("Error updating absence: " + error.message);
  }
}
async function DeleteAbsence(absenceId) {
  try {
    const absence = await Absence.findByIdAndDelete(absenceId);
    if (!absence) {
      throw new Error("absence not found");
    }
    return absence;
  } catch (error) {
    throw new Error("Error deleting absence: " + error.message);
  }
}
module.exports = {
  CreateAbsence,
  FindAllAbsences,
  FindSingleAbsence,
  UpdateAbsence,
  DeleteAbsence,
};
