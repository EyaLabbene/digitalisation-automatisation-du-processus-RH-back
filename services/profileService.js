const Profile = require("../models/ProfileModel");

async function CreateProfile(profileData) {
  try {
    const profile = new Profile(profileData);
    const savedProfile = await profile.save();
    return savedProfile;
  } catch (error) {
    console.log(error);
    throw new Error("Error creating profile: " + error.message);
  }
}
async function FindAllProfiles() {
  try {
    const profiles = await Profile.find();
    return profiles;
  } catch (error) {
    console.log(error);
    throw new Error("Error finding all profiles: " + error.message);
  }
}
async function FindSingleProfile(profileId, profileData) {
  try {
    const profile = await Profile.findById(profileId, profileData, {
      new: true,
    });
    if (!profile) {
      throw new Error("profile not found");
    }
    return profile;
  } catch (error) {
    throw new Error("Error finding  profile: " + error.message);
  }
}
/*const Updateprofile =async(req,res)=>{

    res.send('update')
}*/
/*const Deleteprofile =async(req,res)=>{
    res.send('delete')

}*/

async function UpdateProfile(profileId, profileData) {
  try {
    const profile = await Profile.findByIdAndUpdate(profileId, profileData, {
      new: true,
    });
    if (!profile) {
      throw new Error("profile not found");
    }
    return profile;
  } catch (error) {
    throw new Error("Error updating profile: " + error.message);
  }
}
async function DeleteProfile(profileId) {
  try {
    const profile = await Profile.findByIdAndDelete(profileId);
    if (!profile) {
      throw new Error("profile not found");
    }
    return profile;
  } catch (error) {
    throw new Error("Error deleting profile: " + error.message);
  }
}
module.exports = {
  CreateProfile,
  FindAllProfiles,
  FindSingleProfile,
  UpdateProfile,
  DeleteProfile,
};
