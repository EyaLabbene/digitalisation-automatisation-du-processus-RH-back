const Candidacy = require("../models/candidacyModel");
const User = require("../models/UserModel");
async function CreateCandidacy(req, res, next) {
  try {
    const candidacy = new Candidacy({
      ...req.data,
      cv: req.data.image,
      candidate: req.user._id,
    });
    const savedCandidacy = await candidacy.save();
    return savedCandidacy;
  } catch (error) {
    console.log(error);
    res.status(500).send(error.message);
  }
}
async function FindAllCandidacys(req, res, next) {
  try {
    const candidacys = await Candidacy.find()
      .populate([
        { path: "candidate", select: "Username" },
        { path: "poste", select: "title" },
      ])
      .lean();
    return candidacys;
  } catch (error) {
    console.log(error);
    res.status(500).send(error.message);
  }
}
async function FindMyCandidacys(req, res, next) {
  try {
    // if (user.role === "candidate") {
    // Fetch candidacys where candidacyee is the current user
    const candidacys = await Candidacy.find({
      candidate: req.user.id,
    }).populate([{ path: "poste", select: "title" }]);
    return candidacys;
    // }
  } catch (error) {
    console.log(error);
    res.status(500).send(error.message);
  }
}
async function FindSingleCandidacy(req, res, next) {
  try {
    const candidacy = await Candidacy.findById(req.params.candidacyId);
    if (!candidacy) {
      res.status(404);
    }
    return candidacy;
  } catch (error) {
    res.status(500).send(error.message);
  }
}
/*const Updatecandidacy =async(req,res)=>{

    res.send('update')
}*/
/*const Deletecandidacy =async(req,res)=>{
    res.send('delete')

}*/

async function UpdateCandidacy(req, res, next) {
  try {
    const candidacy = await Candidacy.findByIdAndUpdate(
      req.params.candidacyId,
      req.body,
      { new: true }
    ).populate([{ path: "candidate", select: "Username" }]);
    if (!candidacy) {
      res.status(404);
    }
    return candidacy;
  } catch (error) {
    res.status(500).send(error.message);
  }
}
async function DeleteCandidacy(req, res, next) {
  try {
    const candidacy = await Candidacy.findByIdAndDelete(req.params.candidacyId);
    if (!candidacy) {
      res.status(404);
    }
    return candidacy;
  } catch (error) {
    res.status(500).send(error.message);
  }
}

module.exports = {
  CreateCandidacy,
  FindAllCandidacys,
  FindSingleCandidacy,
  UpdateCandidacy,
  DeleteCandidacy,
  FindMyCandidacys,
};
