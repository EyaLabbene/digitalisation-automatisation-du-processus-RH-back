const posteService = require("../services/posteService");

async function addPoste(req, res, next) {
  try {
    const poste = await posteService.CreatePoste(req.data);
    res.status(201).json(poste);
  } catch (error) {
    res.send(error);
  }
}

async function getAllPostes(req, res, next) {
  try {
    const postes = await posteService.FindAllPostes();
    res.json(postes);
  } catch (error) {
    res.send("error");
  }
}

async function getSinglePoste(req, res, next) {
  try {
    const poste = await posteService.FindSinglePoste(req.params.posteId);
    res.json(poste);
  } catch (error) {
    res.send(error.message);
  }
}

async function updatePoste(req, res, next) {
  try {
    const poste = await posteService.UpdatePoste(req.params.posteId, req.data);
    res.json(poste);
  } catch (error) {
    res.send("error");
  }
}

async function deletePoste(req, res, next) {
  try {
    const poste = await posteService.DeletePoste(req.params.posteId);
    res.json(poste);
  } catch (error) {
    res.send("error");
  }
}

module.exports = {
  addPoste,
  getAllPostes,
  getSinglePoste,
  updatePoste,
  deletePoste,
};
