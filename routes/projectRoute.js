const express = require("express");
const ProjectController = require("../Controllers/ProjectController");
//const authMiddleware = require('../middlewares/authentificationMiddleware');

const router = express.Router();

//router.use(authentificationMiddleware.authenticate);

router.post("/", ProjectController.addProject);
router.get("/", ProjectController.getAllProjects);
router.get("/:projectId", ProjectController.getSingleProject);
router.put("/:projectId", ProjectController.updateProject);
router.delete("/:projectId", ProjectController.deleteProject);

module.exports = router;
