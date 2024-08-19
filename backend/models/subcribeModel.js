const mongoose = require("mongoose");

const subcribeSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Subcribe = mongoose.model("Subcribe", subcribeSchema);

module.exports = Subcribe;
