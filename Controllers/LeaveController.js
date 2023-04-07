const LeaveService = require("../services/leaveService");

async function addLeave(req, res, next) {
  try {
    const leave = await LeaveService.CreateLeave(req, res, next);
    res.status(201).json(leave);
  } catch (error) {
    res.send(error);
  }
}

async function getAllLeaves(req, res, next) {
  try {
    const leaves = await LeaveService.FindAllLeaves(req, res, next);
    res.json(leaves);
  } catch (error) {
    res.send("error");
  }
}

async function getSingleLeave(req, res, next) {
  try {
    const leave = await LeaveService.FindSingleLeave(req, res, next);
    res.json(leave);
  } catch (error) {
    res.send(error.message);
  }
}

async function updateLeave(req, res, next) {
  try {
    const leave = await LeaveService.UpdateLeave(req, res, next);
    res.json(leave);
  } catch (error) {
    res.send("error");
  }
}

async function deleteLeave(req, res, next) {
  try {
    const leave = await LeaveService.DeleteLeave(req, res, next);
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
