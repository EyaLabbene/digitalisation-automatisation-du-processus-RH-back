const express = require('express');
const TestTechController = require('../Controllers/TestTechniqueController');
const authMiddleware = require('../middlewares/authentificationMiddleware');






const router =express.Router();


router.use(authentificationMiddleware.authenticate);


router.post('/testTech',TestTechController.addTestTech)
router.get('/testTech',TestTechController.getAllTestTechs);
router.get('/:testTechId',TestTechController.getSingleTestTech);
router.put('/:testTechId',TestTechController.updateTestTech);
router.delete('/:testTechId',TestTechController. deleteTestTech);



module.exports = router ;