const Complaint = require("../models/ComplaintModel");

async function CreateComplaint(complaintData) {
  try {
    const complaint = new Complaint(complaintData);
    const savedComplaint = await complaint.save();
    return savedComplaint;
  } catch (error) {
    console.log(error);
    throw new Error("Error creating complaint: " + error.message);
  }
}
async function FindAllComplaints() {
  try {
    const complaints = await Complaint.find();
    return complaints;
  } catch (error) {
    console.log(error);
    throw new Error("Error finding all complaints: " + error.message);
  }
}
async function FindSingleComplaint(complaintId, complaintData) {
  try {
    const complaint = await Complaint.findById(complaintId, complaintData, {
      new: true,
    });
    if (!complaint) {
      throw new Error("complaint not found");
    }
    return complaint;
  } catch (error) {
    throw new Error("Error finding  complaint: " + error.message);
  }
}
/*const Updatecomplaint =async(req,res)=>{

    res.send('update')
}*/
/*const Deletecomplaint =async(req,res)=>{
    res.send('delete')

}*/

async function UpdateComplaint(complaintId, complaintData) {
  try {
    const complaint = await Complaint.findByIdAndUpdate(
      complaintId,
      complaintData,
      { new: true }
    );
    if (!complaint) {
      throw new Error("complaint not found");
    }
    return complaint;
  } catch (error) {
    throw new Error("Error updating complaint: " + error.message);
  }
}
async function DeleteComplaint(complaintId) {
  try {
    const complaint = await Complaint.findByIdAndDelete(complaintId);
    if (!complaint) {
      throw new Error("complaint not found");
    }
    return complaint;
  } catch (error) {
    throw new Error("Error deleting complaint: " + error.message);
  }
}
module.exports = {
  CreateComplaint,
  FindAllComplaints,
  FindSingleComplaint,
  UpdateComplaint,
  DeleteComplaint,
};
