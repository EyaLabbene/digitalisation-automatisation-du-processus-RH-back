const Poste = require("../models/PosteModel");

async function CreatePoste(req, res, next) {
  try {
    console.log(req.data);
    const poste = new Poste(req.data);
    const savedPoste = await poste.save();
    return savedPoste;
  } catch (error) {
    console.log(error);
    res.status(500).send(error.message);
  }
}
async function FindAllPostes(req, res, next) {
  try {
    const postes = await Poste.find().lean();
    return postes;
  } catch (error) {
    console.log(error);
    res.status(500).send(error.message);
  }
}
async function FindSinglePoste(req, res, next) {
  try {
    const poste = await Poste.findById(req.params.posteId);
    if (!poste) {
      res.status(404);
    }
    return poste;
  } catch (error) {
    res.status(500).send(error.message);
  }
}
/*const Updateposte =async(req,res)=>{

    res.send('update')
}*/
/*const Deleteposte =async(req,res)=>{
    res.send('delete')

}*/

async function UpdatePoste(req, res, next) {
  try {
    const poste = await Poste.findByIdAndUpdate(req.params.posteId, req.data, {
      new: true,
    });
    if (!poste) {
      res.status(404);
    }
    return poste;
  } catch (error) {
    res.status(500).send(error.message);
  }
}
async function DeletePoste(req, res, next) {
  try {
    const poste = await Poste.findByIdAndDelete(req.params.posteId);
    if (!poste) {
      res.status(404);
    }
    return poste;
  } catch (error) {
    res.status(500).send(error.message);
  }
}
module.exports = {
  CreatePoste,
  FindAllPostes,
  FindSinglePoste,
  UpdatePoste,
  DeletePoste,
};
