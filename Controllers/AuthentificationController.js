const authService = require("../services/authentificationService");

async function login(req, res, next) {
  try {
    const { email, password } = req.body;
    const { id, last_name, role, first_name, date_of_birth, token } =
      await authService.authenticateUser(email, password);
    res.json({ id, last_name, role, first_name, date_of_birth, token });
  } catch (error) {
    console.log("hhh");
    next(error);
  }
}

module.exports = {
  login,
};
