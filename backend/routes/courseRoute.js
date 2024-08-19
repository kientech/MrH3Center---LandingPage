const express = require("express");
const router = express.Router();
const courseController = require("../controllers/courseController");

router.post("/courses", courseController.createCourse);
router.get("/courses", courseController.getCourses);
router.get("/query/courses", courseController.getCoursesQuery);
router.patch("/courses/status/:id", courseController.updateCourseStatus);
router.get("/courses/:id", courseController.getCourseById);
router.patch("/courses/:id", courseController.updateCourse);
router.delete("/courses/:id", courseController.deleteCourse);

module.exports = router;
