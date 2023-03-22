const userService = require("../services/userService");

async function addUser(req, res, next) {
  try {
    const user = await userService.CreateUser(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.send(error);
  }
}

async function getAllUsers(req, res, next) {
  try {
    const users = await userService.FindAllUsers();
    res.json(users);
  } catch (error) {
    res.send("error");
  }
}

async function getSingleUser(req, res, next) {
  try {
    const user = await userService.FindSingleUser(req.params.userId);
    res.json(user);
  } catch (error) {
    res.send("error");
  }
}

async function updateUser(req, res, next) {
  try {
    const user = await userService.UpdateUser(req.params.userId, req.body);
    res.json(user);
  } catch (error) {
    res.send("error");
  }
}

async function deleteUser(req, res, next) {
  try {
    const user = await userService.DeleteUser(req.params.userId);
    res.json(user);
  } catch (error) {
    res.send("error");
  }
}

module.exports = {
  addUser,
  getAllUsers,
  getSingleUser,
  updateUser,
  deleteUser,
};
