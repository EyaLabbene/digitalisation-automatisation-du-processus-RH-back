const Leave = require("../models/LeaveModel");

async function CreateLeave(leaveData) {
  try {
    const leave = new Leave(leaveData);
    const savedLeave = await leave.save();
    return savedLeave;
  } catch (error) {
    console.log(error);
    throw new Error("Error creating leave: " + error.message);
  }
}
async function FindAllLeaves() {
  try {
    const leaves = await Leave.find();
    return leaves;
  } catch (error) {
    console.log(error);
    throw new Error("Error finding all leaves: " + error.message);
  }
}
async function FindSingleLeave(leaveId, leaveData) {
  try {
    const leave = await Leave.findById(leaveId, leaveData, { new: true });
    if (!leave) {
      throw new Error("leave not found");
    }
    return leave;
  } catch (error) {
    throw new Error("Error finding  leave: " + error.message);
  }
}
/*const Updateleave =async(req,res)=>{

    res.send('update')
}*/
/*const Deleteleave =async(req,res)=>{
    res.send('delete')

}*/

async function UpdateLeave(leaveId, leaveData) {
  try {
    const leave = await Leave.findByIdAndUpdate(leaveId, leaveData, {
      new: true,
    });
    if (!leave) {
      throw new Error("leave not found");
    }
    return leave;
  } catch (error) {
    throw new Error("Error updating leave: " + error.message);
  }
}
async function DeleteLeave(leaveId) {
  try {
    const leave = await Leave.findByIdAndDelete(leaveId);
    if (!leave) {
      throw new Error("leave not found");
    }
    return leave;
  } catch (error) {
    throw new Error("Error deleting leave: " + error.message);
  }
}
module.exports = {
  CreateLeave,
  FindAllLeaves,
  FindSingleLeave,
  UpdateLeave,
  DeleteLeave,
};
