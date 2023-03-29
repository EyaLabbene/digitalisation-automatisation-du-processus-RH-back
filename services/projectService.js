const Project = require("../models/ProjectModel");

async function CreateProject(projectData) {
  try {
    const project = new Project(projectData);
    const savedProject = await project.save();
    return savedProject;
  } catch (error) {
    console.log(error);
    throw new Error("Error creating project: " + error.message);
  }
}
async function FindAllProjects() {
  try {
    const projects = await Project.find();
    return projects;
  } catch (error) {
    console.log(error);
    throw new Error("Error finding all projects: " + error.message);
  }
}
async function FindSingleProject(projectId) {
  try {
    console.log("khlat l service");
    const project = await Project.findById(projectId);
    console.log(project);
    if (!project) {
      throw new Error("project not found");
    }
    return project;
  } catch (error) {
    throw new Error("Error finding  project: " + error.message);
  }
}
/*const Updateproject =async(req,res)=>{

    res.send('update')
}*/
/*const Deleteproject =async(req,res)=>{
    res.send('delete')

}*/

async function UpdateProject(projectId, projectData) {
  try {
    const project = await Project.findByIdAndUpdate(projectId, projectData, {
      new: true,
    });
    if (!project) {
      throw new Error("project not found");
    }
    return project;
  } catch (error) {
    throw new Error("Error updating project: " + error.message);
  }
}
async function DeleteProject(projectId) {
  try {
    const project = await Project.findByIdAndDelete(projectId);
    if (!project) {
      throw new Error("project not found");
    }
    return project;
  } catch (error) {
    throw new Error("Error deleting project: " + error.message);
  }
}
module.exports = {
  CreateProject,
  FindAllProjects,
  FindSingleProject,
  UpdateProject,
  DeleteProject,
};
