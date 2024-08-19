const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
  interests: {
    web: { type: Boolean, default: false },
    app: { type: Boolean, default: false },
    ml: { type: Boolean, default: false },
  },
  name: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true },
  read: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Contact = mongoose.model("Contact", contactSchema);

module.exports = Contact;
