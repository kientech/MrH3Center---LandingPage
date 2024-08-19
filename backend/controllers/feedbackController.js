const Feedback = require("../models/feedbackModel");

exports.createFeedback = async (req, res) => {
  try {
    const feedback = new Feedback(req.body);
    await feedback.save();
    return res.status(201).json({
      status: "success",
      data: feedback,
    });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

exports.getFeedbackById = async (req, res) => {
  try {
    const feedback = await Feedback.findById(req.params.id);
    if (!feedback) return res.status(404).json({ error: "Feeback not found" });
    res.json(feedback);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getFeedbacks = async (req, res) => {
  try {
    const feedbacks = await Feedback.find();
    return res.json({
      status: "success",
      length: feedbacks.length,
      data: feedbacks,
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

// exports.getFeedbacksQuery = async (req, res) => {
//   try {
//     const { type, instructor } = req.query;
//     const query = {};
//     if (type) {
//       query.type = type;
//     }
//     if (instructor) {
//       query.instructor = { $regex: instructor, $options: 'i' }; // Case-insensitive search
//     }

//     // Fetch courses with filters
//     const courses = await Course.find(query);
//     return res.json({
//       status: "success",
//       length: courses.length,
//       data: courses,
//     });
//   } catch (error) {
//     return res.status(500).json({ error: error.message });
//   }
// };


exports.updateFeedback = async (req, res) => {
  try {
    const feedback = await Feedback.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!feedback) return res.status(404).json({ error: "Feedback not found" });
    return res.status(200).json({
      status: "success",
      data: feedback,
    });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

// exports.updateCourseStatus = async (req, res) => {
//   try {
//     const course = await Course.findByIdAndUpdate(req.params.id, req.body, {
//       new: true,
//     });
//     console.log("🚀 ~ exports.updateCourseStatus= ~ course:", course);
//     if (!course) return res.status(404).json({ error: "Course not found" });
//     res.json(course);
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// };

exports.deleteFeedback = async (req, res) => {
  try {
    const feedback = await Feedback.findByIdAndDelete(req.params.id);
    if (!feedback) return res.status(404).json({ error: "Feedback not found" });
    res.json({ message: "Feedback deleted" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
