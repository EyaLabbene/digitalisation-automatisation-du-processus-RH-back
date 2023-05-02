const authService = require("../services/authentificationService");

async function login(req, res, next) {
  try {
    console.log("abgh");
    const { email, password } = req.body;
    const { last_name, role, first_name, date_of_birth, token } =
      await authService.authenticateUser(email, password);
    console.log("ici");
    res.json({ last_name, role, first_name, date_of_birth, token });
  } catch (error) {
    console.log("hhh");
    next(error);
  }
  console.log("hhh");
}

module.exports = {
  login,
};
