const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
  name: { type: String, required: true },
  img: { type: String, required: true },
  link: { type: String, required: true },
  position: { type: Number, required: true },
});

const roadmapSchema = new mongoose.Schema({
  title: { type: String, required: true },
  courses: [courseSchema],
});

module.exports = mongoose.model("Roadmap", roadmapSchema);
