const mongoose = require("mongoose");

const memberSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  position: String,
  imageMember: String,
  facebookContact: String,
  instagramContact: String,
  xContact: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Member = mongoose.model("Member", memberSchema);

module.exports = Member;
