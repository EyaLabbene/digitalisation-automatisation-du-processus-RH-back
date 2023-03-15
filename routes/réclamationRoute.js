const express = require('express');
const RéclamationController = require('../Controllers/réclamationController');
const authMiddleware = require('../middlewares/authentificationMiddleware');






const router =express.Router();


router.use(authentificationMiddleware.authenticate);


router.post('/réclamation',RéclamationController.addRéclamation)
router.get('/réclamation',RéclamationController.getAllRéclamations);
router.get('/:réclamationId',RéclamationController.getSingleRéclamation);
router.put('/:réclamationId',RéclamationController.updateRéclamation);
router.delete('/:réclamationId',RéclamationController. deleteRéclamation);



module.exports = router ;

