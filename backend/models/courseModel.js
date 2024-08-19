const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  tag: String,
  description: String,
  duration: Number,
  lesson: Number,
  instructor: String,
  type: String,
  image: String,
  targetUrl: String,
  money: String,
  rating: Number,
  ratingAmount: Number,
  status: {
    type: String,
    enum: ["approved", "pending"],
    default: "pending",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Course = mongoose.model("Course", courseSchema);

module.exports = Course;
