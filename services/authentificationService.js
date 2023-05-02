const jwt = require("jsonwebtoken");
const User = require("../models/UserModel");

const bcrypt = require("bcrypt");

async function authenticateUser(email, password) {
  const user = await User.findOne({ email });

  if (!user) {
    throw new Error("User not found");
  }
  console.log("hkjvfkdjhvkdhh");
  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    throw new Error("Invalid password");
  }

  const token = jwt.sign({ userId: user._id }, "secretkey");

  return {
    role: user.role,
    last_name: user.last_name,
    first_name: user.first_name,
    date_of_birth: user.date_of_birth,
    token,
  };
}

module.exports = {
  authenticateUser,
};
