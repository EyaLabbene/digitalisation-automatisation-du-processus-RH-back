const express = require('express');
const PosteController = require('../Controllers/PosteController');
const authMiddleware = require('../middlewares/authentificationMiddleware');






const router =express.Router();


router.use(authentificationMiddleware.authenticate);


router.post('/poste',PosteController.addPoste)
router.get('/poste',PosteController.getAllPostes);
router.get('/:posteId',PosteController.getSinglePoste);
router.put('/:posteId',PosteController.updatePoste);
router.delete('/:posteId',PosteController. deletePoste);



module.exports = router ;

