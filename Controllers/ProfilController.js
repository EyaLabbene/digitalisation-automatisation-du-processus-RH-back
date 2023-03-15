
const profilService = require("../services/profilService");

 async function addProfile (req, res, next) => {
  try {
    const profil = await profilService.CreateProfil(req.body);
    res.status(201).json(profil);
  } catch (error) {
    res.send('error') ;
  }
};

 async function getAllProfiles (req, res, next) => {
  try {
    const profils = await profilService.FindAllProfils();
    res.json(profils);
  } catch (error) {
    res.send('error') ;
  }
};

 async function getSingleProfile (req, res, next) => {
  try {
    const profil = await profilService.FindSingleProfil(req.params.profilId);
    res.json(profil);
  } catch (error) {
    res.send('error') ;
  }
};

 async function updateProfile (req, res, next) => {
  try {
    const profil = await profilService.UpdateProfil(
      req.params.profilId,
      req.body
    );
    res.json(profil);
  } catch (error) {
    res.send('error') ;
  }
};

 async function deleteProfile (req, res, next) => {
  try {
    const profil = await profilService.DeleteProfil(req.params.profilId);
    res.json(profil);
  } catch (error) {
    res.send('error') ;
  }
};

