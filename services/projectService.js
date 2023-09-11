const Project = require("../models/ProjectModel");

async function CreateProject(req, res, next) {
  try {
    const project = new Project(req.body);
    const savedProject = await project.save();
    return savedProject;
  } catch (error) {
    console.log(error);
    res.status(500).send(error.message);
  }
}
async function FindAllProjects(req, res, next) {
  try {
    const projects = await Project.find().populate([
      { path: "employee", select: "Username" },
    ]);
    return projects;
  } catch (error) {
    console.log(error);
    res.status(500).send(error.message);
  }
}
async function FindSingleProject(req, res, next) {
  try {
    console.log("khlat l service");
    const project = await Project.findById(req.params.projectId);
    console.log(project);
    if (!project) {
      res.status(404);
    }
    return project;
  } catch (error) {
    res.status(500).send(error.message);
  }
}
/*const Updateproject =async(req,res)=>{

    res.send('update')
}*/
/*const Deleteproject =async(req,res)=>{
    res.send('delete')

}*/

async function UpdateProject(req, res, next) {
  try {
    const project = await Project.findByIdAndUpdate(
      req.params.projectId,
      req.body,
      {
        new: true,
      }
    ).populate([{ path: "employee", select: "Username" }]);
    if (!project) {
      res.status(404);
    }
    return project;
  } catch (error) {
    res.status(500).send(error.message);
  }
}
async function DeleteProject(req, res, next) {
  try {
    const project = await Project.findByIdAndDelete(req.params.projectId);
    if (!project) {
      res.status(404);
    }
    return project;
  } catch (error) {
    res.status(500).send(error.message);
  }
}
module.exports = {
  CreateProject,
  FindAllProjects,
  FindSingleProject,
  UpdateProject,
  DeleteProject,
};
