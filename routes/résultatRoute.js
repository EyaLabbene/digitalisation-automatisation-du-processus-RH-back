const express = require('express');
const RésultatController = require('../Controllers/RésultatController');
const authMiddleware = require('../middlewares/authentificationMiddleware');






const router =express.Router();


router.use(authentificationMiddleware.authenticate);


router.post('/résultat',RésultatController.addRésultat)
router.get('/résultat',RésultatController.getAllRésultats);
router.get('/:résultatId',RésultatController.getSingleRésultat);
router.put('/:résultatId',RésultatController.updateRésultat);
router.delete('/:résultatId',RésultatController. deleteRésultat);



module.exports = router ;

