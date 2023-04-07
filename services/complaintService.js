const Complaint = require("../models/ComplaintModel");

async function CreateComplaint(req, res, next) {
  try {
    const complaint = new Complaint(req.body);
    const savedComplaint = await complaint.save();
    return savedComplaint;
  } catch (error) {
    console.log(error);
    res.status(500).send(error.message);
  }
}
async function FindAllComplaints(req, res, next) {
  try {
    const complaints = await Complaint.find();
    return complaints;
  } catch (error) {
    console.log(error);
    res.status(500).send(error.message);
  }
}
async function FindSingleComplaint(req, res, next) {
  try {
    const complaint = await Complaint.findById(req.params.complaintId);
    if (!complaint) {
      res.status(404);
    }
    return complaint;
  } catch (error) {
    res.status(500).send(error.message);
  }
}
/*const Updatecomplaint =async(req,res)=>{

    res.send('update')
}*/
/*const Deletecomplaint =async(req,res)=>{
    res.send('delete')

}*/

async function UpdateComplaint(req, res, next) {
  try {
    const complaint = await Complaint.findByIdAndUpdate(
      req.params.complaintId,
      req.body,
      { new: true }
    );
    if (!complaint) {
      res.status(404);
    }
    return complaint;
  } catch (error) {
    res.status(500).send(error.message);
  }
}
async function DeleteComplaint(req, res, next) {
  try {
    const complaint = await Complaint.findByIdAndDelete(req.params.complaintId);
    if (!complaint) {
      res.status(404);
    }
    return complaint;
  } catch (error) {
    res.status(500).send(error.message);
  }
}
module.exports = {
  CreateComplaint,
  FindAllComplaints,
  FindSingleComplaint,
  UpdateComplaint,
  DeleteComplaint,
};
