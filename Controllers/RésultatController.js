const résultatService = require("../services/résultatService");

async function addRésultat(req, res, next) {
  try {
    const résultat = await résultatService.CreateRésultat(req.body);
    res.status(201).json(résultat);
  } catch (error) {
    res.send(error);
  }
}

async function getAllRésultats(req, res, next) {
  try {
    const résultats = await résultatService.FindAllRésultats();
    res.json(résultats);
  } catch (error) {
    res.send("error");
  }
}

async function getSingleRésultat(req, res, next) {
  try {
    const résultat = await résultatService.FindSingleRésultat(
      req.params.résultatId
    );
    res.json(résultat);
  } catch (error) {
    res.send("error");
  }
}

async function updateRésultat(req, res, next) {
  try {
    const résultat = await résultatService.UpdateRésultat(
      req.params.résultatId,
      req.body
    );
    res.json(résultat);
  } catch (error) {
    res.send("error");
  }
}

async function deleteRésultat(req, res, next) {
  try {
    const résultat = await résultatService.DeleteRésultat(
      req.params.résultatId
    );
    res.json(résultat);
  } catch (error) {
    res.send("error");
  }
}

module.exports = {
  addRésultat,
  getAllRésultats,
  getSingleRésultat,
  updateRésultat,
  deleteRésultat,
};
