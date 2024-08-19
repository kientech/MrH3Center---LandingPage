const mongoose = require("mongoose");

const feedbackSchema = new mongoose.Schema({
  feedbackDescription: String,
  feedbackName: String,
  rating: Number,
  position: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Feedback = mongoose.model("Feedback", feedbackSchema);

module.exports = Feedback;
