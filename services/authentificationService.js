const jwt = require("jsonwebtoken");
const User = require("../models/UserModel");

// authenticate user by email and password
async function authenticateUser(email, password) {
  // find user by email
  const user = await User.findOne({ email });

  if (!user) {
    res.status(404);
  }

  // check if password matches
  const isMatch = await user.comparePassword(password);

  if (!isMatch) {
    throw new Error("Invalid password");
  }

  // generate token
  const token = jwt.sign({ userId: user._id }, "secretkey");

  return { user, token };
}

module.exports = {
  authenticateUser,
};
