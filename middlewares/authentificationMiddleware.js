const jwt = require("jsonwebtoken");
const User = require("../models/UserModel");

async function authenticateToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "Authentication token missing" });
  }

  try {
    const decoded = jwt.verify(token, "secretkey");
    const user = await User.findById(decoded.userId);

    if (!user) {
      throw new Error("User not found");
    }

    req.user = user;
    next();
  } catch (err) {
    return res.status(401).json({ message: "Invalid authentication token" });
  }
}

module.exports = {
  authenticateToken,
};
