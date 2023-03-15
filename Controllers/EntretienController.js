
const entretienService = require("../services/entretienService");

 async function addEntretien (req, res, next) => {
  try {
    const entretien = await entretienService.CreateEntretien(req.body);
    res.status(201).json(entretien);
  } catch (error) {
    res.send('error') ;
  }
};

 async function getAllEntretiens (req, res, next) => {
  try {
    const entretiens = await entretienService.FindAllEntretiens();
    res.json(entretiens);
  } catch (error) {
    res.send('error') ;
  }
};

 async function getSingleEntretien (req, res, next) => {
  try {
    const entretien = await entretienService.FindSingleEntretien(req.params.entretienId);
    res.json(entretien);
  } catch (error) {
    res.send('error') ;
  }
};

 async function updateEntretien (req, res, next) => {
  try {
    const entretien = await entretienService.UpdateEntretien(
      req.params.entretienId,
      req.body
    );
    res.json(entretien);
  } catch (error) {
    res.send('error') ;
  }
};

 async function deleteEntretien  (req, res, next) => {
  try {
    const entretien = await entretienService.DeleteEntretien(req.params.entretienId);
    res.json(entretien);
  } catch (error) {
    res.send('error') ;
  }
};

