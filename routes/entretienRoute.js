const express = require('express');
const EntretienController = require('../Controllers/EntretienController');
const authMiddleware = require('../middlewares/authentificationMiddleware');






const router =express.Router();


router.use(authentificationMiddleware.authenticate);


router.post('/entretien',EntretienController.addEntretien)
router.get('/entretien',EntretienController.getAllEntretiens);
router.get('/:entretienId',EntretienController.getSingleEntretien);
router.put('/:entretienId',EntretienController.updateEntretien);
router.delete('/:entretienId',EntretienController. deleteEntretien);



module.exports = router ;

