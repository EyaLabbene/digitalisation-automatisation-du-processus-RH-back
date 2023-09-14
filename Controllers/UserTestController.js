const userTestService = require("../services/UserTestService");

async function addUserTest(req, res, next) {
  try {
    const userTest = await userTestService.CreateUserTest(req, res, next);
    res.status(201).json(userTest);
  } catch (error) {
    res.send(error);
  }
}

async function getAllUserTests(req, res, next) {
  try {
    const userTests = await userTestService.FindAllUserTests(req, res, next);
    res.json(userTests);
  } catch (error) {
    res.send("error");
  }
}
async function getMyUserTests(req, res, next) {
  try {
    const userTests = await userTestService.FindMyUserTests(req);
    res.json(userTests);
  } catch (error) {
    res.send("error");
  }
}
async function getSingleUserTest(req, res, next) {
  try {
    const userTest = await userTestService.FindSingleUserTest(req, res, next);
    res.json(userTest);
  } catch (error) {
    res.send(error.message);
  }
}

async function updateUserTest(req, res, next) {
  try {
    const userTest = await userTestService.UpdateUserTest(req, res, next);
    res.json(userTest);
  } catch (error) {
    res.send("error");
  }
}

async function deleteUserTest(req, res, next) {
  try {
    const userTest = await userTestService.DeleteUserTest(req, res, next);
    res.json(userTest);
  } catch (error) {
    res.send("error");
  }
}

module.exports = {
  addUserTest,
  getAllUserTests,
  getSingleUserTest,
  updateUserTest,
  deleteUserTest,
  getMyUserTests,
};
