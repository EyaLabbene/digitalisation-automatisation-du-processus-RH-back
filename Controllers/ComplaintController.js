const complaintService = require("../services/complaintService");

async function addComplaint(req, res, next) {
  try {
    const complaint = await complaintService.CreateComplaint(req, res, next);
    res.status(201).json(complaint);
  } catch (error) {
    res.send(error);
  }
}

async function getAllComplaints(req, res, next) {
  try {
    const complaints = await complaintService.FindAllComplaints(req, res, next);
    res.json(complaints);
  } catch (error) {
    res.send("error");
  }
}

async function getSingleComplaint(req, res, next) {
  try {
    const complaint = await complaintService.FindSingleComplaint(
      req,
      res,
      next
    );
    res.json(complaint);
  } catch (error) {
    res.send(error.message);
  }
}

async function updateComplaint(req, res, next) {
  try {
    const complaint = await complaintService.UpdateComplaint(req, res, next);
    res.json(complaint);
  } catch (error) {
    res.send("error");
  }
}

async function deleteComplaint(req, res, next) {
  try {
    const complaint = await complaintService.DeleteComplaint(req, res, next);
    res.json(complaint);
  } catch (error) {
    res.send("error");
  }
}

module.exports = {
  addComplaint,
  getAllComplaints,
  getSingleComplaint,
  updateComplaint,
  deleteComplaint,
};
