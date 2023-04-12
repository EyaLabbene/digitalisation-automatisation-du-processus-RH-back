const authService = require("../services/authentificationService");

async function login(req, res, next) {
  try {
    const { email, password } = req.body;
    const { user, token } = await authService.authenticateUser(email, password);

    res.json({ user, token });
  } catch (error) {
    next(error);
  }
}

module.exports = {
  login,
};
