const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  tag: String,
  description: String,
  technicalTools: String,
  author: String,
  image: String,
  projectUrl: String,
  videoUrl: String,
  rating: Number,
  ratingAmount: Number,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Project = mongoose.model("Project", projectSchema);

module.exports = Project;
