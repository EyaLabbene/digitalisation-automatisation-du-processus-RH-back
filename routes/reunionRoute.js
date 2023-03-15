const express = require('express');
const ReunionController = require('../Controllers/ReunionController');
const authMiddleware = require('../middlewares/authentificationMiddleware');






const router =express.Router();


router.use(authentificationMiddleware.authenticate);


router.post('/réunion',ReunionController.addReunion)
router.get('/réunion',ReunionController.getAllReunions);
router.get('/:réunionId',ReunionController.getSingleReunion);
router.put('/:réunionId',ReunionController.updateReunion);
router.delete('/:réunionId',ReunionController. deleteReunion);



module.exports = router ;

