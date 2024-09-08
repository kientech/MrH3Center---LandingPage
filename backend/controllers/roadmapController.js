const Roadmap = require('../models/roadmapModel');

// Tạo roadmap mới
exports.createRoadmap = async (req, res) => {
  try {
    const { title } = req.body;
    const roadmap = new Roadmap({ title });
    await roadmap.save();
    res.status(201).json(roadmap);
  } catch (error) {
    res.status(500).send('Error creating roadmap');
  }
};

// Lấy danh sách tất cả roadmaps
exports.getAllRoadmaps = async (req, res) => {
  try {
    const roadmaps = await Roadmap.find();
    res.json(roadmaps);
  } catch (error) {
    res.status(500).send('Error fetching roadmaps');
  }
};

// Lấy roadmap theo ID
exports.getRoadmapById = async (req, res) => {
  try {
    const roadmap = await Roadmap.findById(req.params.id);
    if (!roadmap) {
      return res.status(404).send('Roadmap not found');
    }
    res.json(roadmap);
  } catch (error) {
    res.status(500).send('Error fetching roadmap');
  }
};

// Thêm khóa học vào roadmap
exports.addCourse = async (req, res) => {
  try {
    const roadmap = await Roadmap.findById(req.params.roadmapId);
    if (!roadmap) {
      return res.status(404).send('Roadmap not found');
    }

    const newCourse = { ...req.body, position: roadmap.courses.length };
    roadmap.courses.push(newCourse);
    await roadmap.save();
    res.status(201).json(roadmap);
  } catch (error) {
    res.status(500).send('Error adding course');
  }
};

// Chỉnh sửa khóa học
exports.updateCourse = async (req, res) => {
  try {
    const roadmap = await Roadmap.findById(req.params.roadmapId);
    if (!roadmap) {
      return res.status(404).send('Roadmap not found');
    }

    const course = roadmap.courses.id(req.params.courseId);
    if (!course) {
      return res.status(404).send('Course not found');
    }

    Object.assign(course, req.body);
    await roadmap.save();
    res.json(roadmap);
  } catch (error) {
    res.status(500).send('Error updating course');
  }
};

// Sắp xếp khóa học
exports.sortCourses = async (req, res) => {
  try {
    const roadmap = await Roadmap.findById(req.params.roadmapId);
    if (!roadmap) {
      return res.status(404).send('Roadmap not found');
    }

    roadmap.courses = req.body.courses;
    await roadmap.save();
    res.json(roadmap);
  } catch (error) {
    res.status(500).send('Error sorting courses');
  }
};
