
const réclmationService = require('../services/réclmationService');




 async function AddRéclamation  (req, res, next) => {
    try {
      const réclamation = await réclmationService.CreateRéclamation(req.body);
      res.status(201).json(réclamation);
    } catch (error) {
      res.send('error') ;
    }
  };

  async function getAllRéclamation  (req, res, next) => {
    try {
      const réclamations = await réclmationService.FindAllRéclamations();
      res.json(réclamations);
    } catch (error) {
      res.send('error') ;
    }
  };
 
  async function getSingleRéclamation  (req, res, next) => {
    try {
      const réclamation = await réclmationService.FindSingleRéclamation(req.params.réclamationId);
      res.json(réclamation);
    } catch (error) {
      res.send('error') ;
    }
  };

 async function updateReclamation (req, res, next) => {
    try {
      const réclamation = await réclmationService.UpdateRéclamation(req.params.réclamationId, req.body);
      res.json(réclamation);
    } catch (error) {
      res.send('error') ;
    }
  };

async function deleteRéclamation (req, res, next) => {
    try {
      const réclamation = await réclmationService.DeleteRéclamation(req.params.réclamationId);
      res.json(réclamation);
    } catch (error) {
      res.send('error') ;
    }
  };

