const Project = require("../models/projectModel");

exports.createProject = async (req, res) => {
  try {
    const project = new Project(req.body);
    await project.save();
    return res.status(201).json({
      status: "success",
      data: project,
    });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

exports.getProjectById = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    if (!project) return res.status(404).json({ error: "Project not found" });
    return res.json({
      status: "success",
      data: project
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getProjects = async (req, res) => {
  try {
    const projects = await Project.find();
    return res.json({
      status: "success",
      length: projects.length,
      data: projects,
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

exports.updateProject = async (req, res) => {
  try {
    const project = await Project.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!project) return res.status(404).json({ error: "Project not found" });
    return res.status(200).json({
      status: "success",
      data: project,
    });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

exports.deleteProject = async (req, res) => {
  try {
    const project = await Project.findByIdAndDelete(req.params.id);
    if (!project) return res.status(404).json({ error: "Project not found" });
    res.json({ message: "Project deleted" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
