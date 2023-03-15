const express = require('express');
const ProjetController = require('../Controllers/ProjetController');
const authMiddleware = require('../middlewares/authentificationMiddleware');






const router =express.Router();


router.use(authentificationMiddleware.authenticate);


router.post('/projet',ProjetController.addProject)
router.get('/projet',ProjetController.getAllProjects);
router.get('/:projetId',ProjetController.getSingleProject);
router.put('/:projetId',ProjetController.updateProject);
router.delete('/:projetId',ProjetController. deleteProject);



module.exports = router ;

