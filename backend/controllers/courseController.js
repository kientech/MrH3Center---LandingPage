const Course = require("../models/courseModel");

exports.createCourse = async (req, res) => {
  try {
    const course = new Course(req.body);
    await course.save();
    return res.status(201).json({
      status: "success",
      data: course,
    });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

exports.getCourseById = async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);
    if (!course) return res.status(404).json({ error: "Course not found" });
    res.json(course);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getCourses = async (req, res) => {
  try {
    const courses = await Course.find();
    return res.json({
      status: "success",
      length: courses.length,
      data: courses,
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

exports.getCoursesQuery = async (req, res) => {
  try {
    // Extract query parameters
    const { type, instructor } = req.query;

    // Build query object based on provided filters
    const query = {};
    if (type) {
      query.type = type;
    }
    if (instructor) {
      query.instructor = { $regex: instructor, $options: 'i' }; // Case-insensitive search
    }

    // Fetch courses with filters
    const courses = await Course.find(query);
    return res.json({
      status: "success",
      length: courses.length,
      data: courses,
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};


exports.updateCourse = async (req, res) => {
  try {
    const course = await Course.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!course) return res.status(404).json({ error: "Course not found" });
    return res.status(200).json({
      status: "success",
      data: course,
    });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

exports.updateCourseStatus = async (req, res) => {
  try {
    const course = await Course.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    console.log("🚀 ~ exports.updateCourseStatus= ~ course:", course);
    if (!course) return res.status(404).json({ error: "Course not found" });
    res.json(course);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deleteCourse = async (req, res) => {
  try {
    const course = await Course.findByIdAndDelete(req.params.id);
    if (!course) return res.status(404).json({ error: "Course not found" });
    res.json({ message: "Course deleted" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
