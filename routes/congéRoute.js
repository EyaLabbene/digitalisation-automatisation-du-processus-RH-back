const express = require('express');
const CongéController = require('../Controllers/CongéController');
const authMiddleware = require('../middlewares/authentificationMiddleware');






const router =express.Router();


router.use(authentificationMiddleware.authenticate);


router.post('/congé',CongéController.addCongé)
router.get('/congé',CongéController.getAllCongés);
router.get('/:congéId',CongéController.getSingleCongé);
router.put('/:congéId',CongéController.updateCongé);
router.delete('/:congéId',CongéController. deleteCongé);



module.exports = router ;

