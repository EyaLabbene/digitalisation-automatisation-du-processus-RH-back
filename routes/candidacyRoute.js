const express = require("express");
const CandidacyController = require("../Controllers/CandidacyController");
const authMiddleware = require("../middlewares/authentificationMiddleware");
const handleImageMiddleware = require("../middlewares/handleImage");
const setDataMiddleware = require("../middlewares/setData");

const router = express.Router();

//router.use(authentificationMiddleware.authenticate);

router.post(
  "/",
  authMiddleware.authenticateToken,
  handleImageMiddleware.handleImage,
  setDataMiddleware.setData,
  CandidacyController.addCandidacy
);
router.get(
  "/",
  authMiddleware.authenticateToken,
  CandidacyController.getAllCandidacys
);
router.get(
  "/mine",
  authMiddleware.authenticateToken,
  CandidacyController.getMyCandidacys
);
router.get(
  "/:candidacyId",
  authMiddleware.authenticateToken,
  CandidacyController.getSingleCandidacy
);
router.put(
  "/:candidacyId",
  authMiddleware.authenticateToken,
  CandidacyController.updateCandidacy
);
router.delete(
  "/:candidacyId",
  authMiddleware.authenticateToken,
  CandidacyController.deleteCandidacy
);

module.exports = router;
