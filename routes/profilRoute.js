const express = require('express');
const ProfilController = require('../Controllers/ProfilController');
const authMiddleware = require('../middlewares/authentificationMiddleware');






const router =express.Router();


router.use(authentificationMiddleware.authenticate);


router.post('/profil',ProfilController.addProfile)
router.get('/profil',ProfilController.getAllProfiles);
router.get('/:profilId',ProfilController.getSingleProfile);
router.put('/:profilId',ProfilController.updateProfile);
router.delete('/:profilId',ProfilController. deleteProfile);



module.exports = router ;