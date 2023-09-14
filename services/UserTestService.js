const UserTest = require("../models/UserTestModel");
const User = require("../models/UserModel");
async function CreateUserTest(req, res, next) {
  try {
    const userTest = new UserTest(req.body);
    const savedUserTest = await userTest.save();
    return savedUserTest;
  } catch (error) {
    console.log(error);
    res.status(500).send(error.message);
  }
}
async function FindAllUserTests(req, res, next) {
  try {
    const userTests = await UserTest.find().populate([
      { path: "userTestee", select: "Username" },
      { path: "techTest", select: "title" },
    ]);
    return userTests;
  } catch (error) {
    console.log(error);
    res.status(500).send(error.message);
  }
}
async function FindMyUserTests(req, res, next) {
  try {
    // if (user.role === "candidate") {
    // Fetch userTests where userTestee is the current user
    const userTests = await UserTest.find({
      userTestee: req.user.id,
    }).populate([{ path: "techTest", select: "title" }]);
    return userTests;
    // }
  } catch (error) {
    console.log(error);
    res.status(500).send(error.message);
  }
}
async function FindSingleUserTest(req, res, next) {
  try {
    const userTest = await UserTest.findById(req.params.userTestId);
    if (!userTest) {
      res.status(404);
    }
    return userTest;
  } catch (error) {
    res.status(500).send(error.message);
  }
}
/*const UpdateuserTest =async(req,res)=>{

    res.send('update')
}*/
/*const DeleteuserTest =async(req,res)=>{
    res.send('delete')

}*/

async function UpdateUserTest(req, res, next) {
  try {
    const userTest = await UserTest.findByIdAndUpdate(
      req.params.userTestId,
      req.body,
      { new: true }
    ).populate([{ path: "userTestee", select: "Username" }]);
    if (!userTest) {
      res.status(404);
    }
    return userTest;
  } catch (error) {
    res.status(500).send(error.message);
  }
}
async function DeleteUserTest(req, res, next) {
  try {
    const userTest = await UserTest.findByIdAndDelete(req.params.userTestId);
    if (!userTest) {
      res.status(404);
    }
    return userTest;
  } catch (error) {
    res.status(500).send(error.message);
  }
}

module.exports = {
  CreateUserTest,
  FindAllUserTests,
  FindSingleUserTest,
  UpdateUserTest,
  DeleteUserTest,
  FindMyUserTests,
};
