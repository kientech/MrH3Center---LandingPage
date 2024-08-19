const Subcribe = require("../models/subcribeModel");

exports.createSubcribe = async (req, res) => {
  try {
    const { email } = req.body;

    const existingSubcribe = await Subcribe.findOne({ email });
    if (existingSubcribe) {
      return res.status(400).json({ error: "Email already subscribed" });
    }

    const subcribe = new Subcribe({ email });
    await subcribe.save();

    return res.status(201).json({
      status: "success",
      data: subcribe,
    });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

// exports.getCourseById = async (req, res) => {
//   try {
//     const course = await Course.findById(req.params.id);
//     if (!course) return res.status(404).json({ error: "Course not found" });
//     res.json(course);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };

exports.getSubcribes = async (req, res) => {
  try {
    const subcribes = await Subcribe.find();
    return res.json({
      status: "success",
      length: subcribes.length,
      data: subcribes,
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

// exports.toggleReadStatus = async (req, res) => {
//   try {
//     const contact = await Contact.findById(req.params.id);
//     if (!contact) {
//       return res.status(404).json({ message: 'Contact not found' });
//     }

//     // Toggle the read status
//     contact.read = !contact.read;
//     await contact.save();

//     res.json({ message: 'Contact updated', contact });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// exports.getCoursesQuery = async (req, res) => {
//   try {
//     // Extract query parameters
//     const { type, instructor } = req.query;

//     // Build query object based on provided filters
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


// exports.updateCourse = async (req, res) => {
//   try {
//     const course = await Course.findByIdAndUpdate(req.params.id, req.body, {
//       new: true,
//     });
//     if (!course) return res.status(404).json({ error: "Course not found" });
//     return res.status(200).json({
//       status: "success",
//       data: course,
//     });
//   } catch (error) {
//     return res.status(400).json({ error: error.message });
//   }
// };

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

// exports.deleteContact = async (req, res) => {
//   try {
//     const contact = await Contact.findByIdAndDelete(req.params.id);
//     if (!contact) return res.status(404).json({ error: "Contact not found" });
//     res.json({ message: "Contact deleted" });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };
