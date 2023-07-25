const Leave = require("../models/LeaveModel");

async function CreateLeave(req, res, next) {
  try {
    const leave = new Leave(req.body);
    const savedLeave = await leave.save();
    return savedLeave;
  } catch (error) {
    console.log(error);
    res.status(500).send(error.message);
  }
}
async function FindAllLeaves(req, res, next) {
  try {
    const leaves = await Leave.find().populate([
      { path: "employee", select: "Username" },
    ]);
    return leaves;
  } catch (error) {
    console.log(error);
    res.status(500).send(error.message);
  }
}
async function FindSingleLeave(req, res, next) {
  try {
    const leave = await Leave.findById(req.params.leaveId);
    if (!leave) {
      res.status(404);
    }
    return leave;
  } catch (error) {
    res.status(500).send(error.message);
  }
}
/*const Updateleave =async(req,res)=>{

    res.send('update')
}*/
/*const Deleteleave =async(req,res)=>{
    res.send('delete')

}*/

async function UpdateLeave(req, res, next) {
  try {
    const leave = await Leave.findByIdAndUpdate(req.params.leaveId, req.body, {
      new: true,
    });
    if (!leave) {
      res.status(404);
    }
    return leave;
  } catch (error) {
    res.status(500).send(error.message);
  }
}
async function DeleteLeave(req, res, next) {
  try {
    const leave = await Leave.findByIdAndDelete(req.params.leaveId);
    if (!leave) {
      res.status(404);
    }
    return leave;
  } catch (error) {
    res.status(500).send(error.message);
  }
}
module.exports = {
  CreateLeave,
  FindAllLeaves,
  FindSingleLeave,
  UpdateLeave,
  DeleteLeave,
};
