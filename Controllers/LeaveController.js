const LeaveService = require("../services/leaveService");

async function addLeave(req, res, next) {
  try {
    const leave = await LeaveService.CreateLeave(req.body);
    res.status(201).json(leave);
  } catch (error) {
    res.send(error);
  }
}

async function getAllLeaves(req, res, next) {
  try {
    const leaves = await LeaveService.FindAllLeaves();
    res.json(leaves);
  } catch (error) {
    res.send("error");
  }
}

async function getSingleLeave(req, res, next) {
  try {
    const leave = await LeaveService.FindSingleLeave(req.params.leaveId);
    res.json(leave);
  } catch (error) {
    res.send(error.message);
  }
}

async function updateLeave(req, res, next) {
  try {
    const leave = await LeaveService.UpdateLeave(req.params.leaveId, req.body);
    res.json(leave);
  } catch (error) {
    res.send("error");
  }
}

async function deleteLeave(req, res, next) {
  try {
    const leave = await LeaveService.DeleteLeave(req.params.leaveId);
    res.json(leave);
  } catch (error) {
    res.send("error");
  }
}

module.exports = {
  addLeave,
  getAllLeaves,
  getSingleLeave,
  updateLeave,
  deleteLeave,
};
