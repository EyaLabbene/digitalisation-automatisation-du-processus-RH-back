const profileService = require("../services/profileService");

async function addProfile(req, res, next) {
  try {
    const profile = await profileService.CreateProfile(req.body);
    res.status(201).json(profile);
  } catch (error) {
    res.send(error);
  }
}

async function getAllProfiles(req, res, next) {
  try {
    const profiles = await profileService.FindAllProfiles();
    res.json(profiles);
  } catch (error) {
    res.send("error");
  }
}

async function getSingleProfile(req, res, next) {
  try {
    const profile = await profileService.FindSingleProfile(
      req.params.profileId
    );
    res.json(profile);
  } catch (error) {
    res.send("error");
  }
}

async function updateProfile(req, res, next) {
  try {
    const profile = await profileService.UpdateProfile(
      req.params.profileId,
      req.body
    );
    res.json(profile);
  } catch (error) {
    res.send("error");
  }
}

async function deleteProfile(req, res, next) {
  try {
    const profile = await profileService.DeleteProfile(req.params.profileId);
    res.json(profile);
  } catch (error) {
    res.send("error");
  }
}

module.exports = {
  addProfile,
  getAllProfiles,
  getSingleProfile,
  updateProfile,
  deleteProfile,
};
