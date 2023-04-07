const User = require("../models/UserModel");

async function CreateUser(req, res, next) {
  try {
    const user = new User(req.body);
    const savedUser = await user.save();
    return savedUser;
  } catch (error) {
    console.log(error);
    res.status(500).send(error.message);
  }
}
async function FindAllUsers(req, res, next) {
  try {
    const users = await User.find();
    return users;
  } catch (error) {
    console.log(error);
    res.status(500).send(error.message);
  }
}
async function FindSingleUser(req, res, next) {
  try {
    const user = await User.findById(req.params.userId);
    if (!user) {
      res.status(404);
    }
    return user;
  } catch (error) {
    res.status(500).send(error.message);
  }
}
/*const UpdateUser =async(req,res)=>{

    res.send('update')
}*/
/*const DeleteUser =async(req,res)=>{
    res.send('delete')

}*/

async function UpdateUser(req, res, next) {
  try {
    console.log(req.params.userId);
    console.log(req.body);
    const user = await User.findByIdAndUpdate(req.params.userId, req.body, {
      new: true,
    });
    console.log(user);
    if (!user) {
      res.status(404);
    }
    return user;
  } catch (error) {
    res.status(500).send(error.message);
  }
}
async function DeleteUser(req, res, next) {
  try {
    const user = await User.findByIdAndDelete(req.params.userId);
    if (!user) {
      res.status(404);
    }
    return user;
  } catch (error) {
    res.status(500).send(error.message);
  }
}
module.exports = {
  CreateUser,
  FindAllUsers,
  FindSingleUser,
  UpdateUser,
  DeleteUser,
};
