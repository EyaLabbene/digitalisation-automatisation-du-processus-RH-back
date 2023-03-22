const User = require("../models/UserModel");

async function CreateUser(userData) {
  try {
    const user = new User(userData);
    const savedUser = await user.save();
    return savedUser;
  } catch (error) {
    console.log(error);
    throw new Error("Error creating user: " + error.message);
  }
}
async function FindAllUsers() {
  try {
    const users = await User.find();
    return users;
  } catch (error) {
    console.log(error);
    throw new Error("Error finding all users: " + error.message);
  }
}
async function FindSingleUser(userId, userData) {
  try {
    const user = await User.findById(userId, userData, { new: true });
    if (!user) {
      throw new Error("User not found");
    }
    return user;
  } catch (error) {
    throw new Error("Error finding  user: " + error.message);
  }
}
/*const UpdateUser =async(req,res)=>{

    res.send('update')
}*/
/*const DeleteUser =async(req,res)=>{
    res.send('delete')

}*/

async function UpdateUser(userId, userData) {
  try {
    const user = await User.findByIdAndUpdate(userId, userData, { new: true });
    if (!user) {
      throw new Error("User not found");
    }
    return user;
  } catch (error) {
    throw new Error("Error updating user: " + error.message);
  }
}
async function DeleteUser(userId) {
  try {
    const user = await User.findByIdAndDelete(userId);
    if (!user) {
      throw new Error("User not found");
    }
    return user;
  } catch (error) {
    throw new Error("Error deleting user: " + error.message);
  }
}
module.exports = {
  CreateUser,
  FindAllUsers,
  FindSingleUser,
  UpdateUser,
  DeleteUser,
};
