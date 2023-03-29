const projectService = require("../services/projectService");

async function addProject(req, res, next) {
  try {
    const project = await projectService.CreateProject(req.body);
    res.status(201).json(project);
  } catch (error) {
    res.send(error);
  }
}

async function getAllProjects(req, res, next) {
  try {
    const projects = await projectService.FindAllProjects();
    res.json(projects);
  } catch (error) {
    res.send("error");
  }
}

async function getSingleProject(req, res, next) {
  try {
    console.log("khlat");
    console.log(req.params);
    const project = await projectService.FindSingleProject(
      req.params.projectId
    );
    res.json(project);
  } catch (error) {
    res.send(error.message);
  }
}
async function updateProject(req, res, next) {
  try {
    const project = await projectService.UpdateProject(
      req.params.projectId,
      req.body
    );
    res.json(project);
  } catch (error) {
    res.send("error");
  }
}

async function deleteProject(req, res, next) {
  try {
    const project = await projectService.DeleteProject(req.params.projectId);
    res.json(project);
  } catch (error) {
    res.send("error");
  }
}
module.exports = {
  addProject,
  getAllProjects,
  getSingleProject,
  updateProject,
  deleteProject,
};
