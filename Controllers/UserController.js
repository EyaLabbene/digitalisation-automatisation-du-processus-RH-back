const userService = require("../services/userService");

async function addUser(req, res, next) {
  try {
    const user = await userService.CreateUser(req, res, next);
    res.status(201).json(user);
  } catch (error) {
    res.send(error);
  }
}

async function getAllUsers(req, res, next) {
  try {
    const users = await userService.FindAllUsers(req, res, next);
    res.json(users);
  } catch (error) {
    res.send("error");
  }
}

async function getSingleUser(req, res, next) {
  try {
    const user = await userService.FindSingleUser(req, res, next);
    res.json(user);
  } catch (error) {
    res.send(error.message);
  }
}

async function updateUser(req, res, next) {
  try {
    const user = await userService.UpdateUser(req, res, next);
    res.json(user);
  } catch (error) {
    res.send("error");
  }
}

async function deleteUser(req, res, next) {
  try {
    const user = await userService.DeleteUser(req, res, next);
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
