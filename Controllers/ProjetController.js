
const projetService = require('../services/projetService');




 async  function addProject (req, res, next) => {
    try {
      const projet = await projetService.CreateProjet(req.body);
      res.status(201).json(projet);
    } catch (error) {
      res.send('error') ;
    }
  };

  async function  getAllProjects (req, res, next) => {
    try {
      const projets = await projetService.FindAllProjets();
      res.json(projets);
    } catch (error) {
      res.send('error') ;
    }
  };
 
 async function  getSingleProject (req, res, next) => {
    try {
      const projet = await projetService.FindSingleProjet(req.params.projetId);
      res.json(projet);
    } catch (error) {
      res.send('error') ;
    }
  };
 async function updateProject (req, res, next) => {
    try {
      const projet = await projetService.UpdateProjet(req.params.projetId, req.body);
      res.json(projet);
    } catch (error) {
      res.send('error') ;
    }
  };

 async function deleteProject (req, res, next) => {
    try {
      const projet = await projetService.DeleteProjet(req.params.projetId);
      res.json(projet);
    } catch (error) {
      res.send('error') ;
    }
  };

