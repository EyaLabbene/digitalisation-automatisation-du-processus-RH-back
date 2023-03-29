const express = require("express");
const PosteController = require("../Controllers/PosteController");
const handleImageMiddleware = require("../middlewares/handleImage");
const setDataMiddleware = require("../middlewares/setData");

const router = express.Router();

//router.use(authentificationMiddleware.authenticate);

router.post(
  "/",
  handleImageMiddleware.handleImage,
  setDataMiddleware.setData,
  PosteController.addPoste
);
router.get("/", PosteController.getAllPostes);
router.get("/:posteId", PosteController.getSinglePoste);
router.put(
  "/:posteId",
  handleImageMiddleware.handleImage,
  setDataMiddleware.setData,
  PosteController.updatePoste
);
router.delete("/:posteId", PosteController.deletePoste);

module.exports = router;
