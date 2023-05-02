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
async function getUserProfile(req, res, next) {
  try {
    // Get the user ID from the decoded JWT token
    const userId = req.user.id;

    // Find the user in the database using the user ID
    const user = await User.findById(userId);

    // If the user does not exist, return an error
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Return the user profile data
    res.status(200).json({
      last_name: user.last_name,
      role: user.role,
      first_name: user.first_name,
      date_of_birth: user.date_of_birth,

      // ...other profile data you want to include
    });
  } catch (err) {
    next(err);
  }
}

module.exports = {
  addUser,
  getAllUsers,
  getSingleUser,
  updateUser,
  deleteUser,
  getUserProfile,
};
