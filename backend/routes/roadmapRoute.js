const express = require("express");
const router = express.Router();
const roadmapController = require("../controllers/roadmapController");

// Tạo roadmap mới
router.post("/", roadmapController.createRoadmap);

// Lấy danh sách tất cả roadmaps
router.get("/", roadmapController.getAllRoadmaps);

// Lấy roadmap theo ID
router.get("/:id", roadmapController.getRoadmapById);

// Thêm khóa học vào roadmap
router.post("/:roadmapId/course", roadmapController.addCourse);

// Chỉnh sửa khóa học
router.put("/:roadmapId/course/:courseId", roadmapController.updateCourse);

// Sắp xếp khóa học
router.put("/:roadmapId/courses", roadmapController.sortCourses);

module.exports = router;
