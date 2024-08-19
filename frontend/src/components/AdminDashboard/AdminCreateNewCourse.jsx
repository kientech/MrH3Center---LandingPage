import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const AdminCreateNewCourse = () => {
  const [courseData, setCourseData] = useState({
    title: "",
    tag: "",
    description: "",
    duration: "",
    instructor: "",
    type: "",
    image: "",
    targetUrl: "",
    money: "",
    rating: "",
    ratingAmount: "",
  });

  const initialCourseData = {
    title: "",
    tag: "",
    description: "",
    duration: "",
    lesson: "",
    instructor: "",
    type: "",
    image: "",
    targetUrl: "",
    money: "",
    rating: "",
    ratingAmount: "",
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCourseData({ ...courseData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://127.0.0.1:3000/api/courses",
        courseData
      );
      toast.success("Create New Course Success!!!");
      setCourseData(initialCourseData);
    } catch (error) {
      console.error("There was an error adding the course!", error);
      toast.error(error.message);
    }
  };

  return (
    <div className="w-full mx-auto mt-10 mr-10">
      <h2 className="text-2xl font-bold mb-6">Create a New Course</h2>
      <form onSubmit={handleSubmit}>
        <div className="w-full flex items-center gap-x-10">
          <div className="mb-4 w-full">
            <label className="block mb-2">Course Name</label>
            <input
              type="text"
              name="title"
              placeholder="Enter the course name"
              value={courseData.title}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded"
            />
          </div>
          <div className="mb-4 w-full">
            <label className="block mb-2">Tag</label>
            <select
              name="tag"
              value={courseData.tag}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded"
            >
              <option value="">Select Tag</option>
              <option value="Web Development">Web Development</option>
              <option value="Mobile App">Mobile App</option>
              <option value="Micro-Processing">Micro-Processing</option>
              <option value="Machine Learning">Machine Learning</option>
            </select>
          </div>
        </div>
        <div className="mb-4">
          <label className="block mb-2">Description</label>
          <textarea
            name="description"
            value={courseData.description}
            placeholder="Write a description of the course"
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded"
          ></textarea>
        </div>
        <div className="flex items-center gap-x-10">
          <div className="mb-4 w-full">
            <label className="block mb-2">Duration (hours)</label>
            <input
              type="number"
              name="duration"
              placeholder="Course completion time"
              value={courseData.duration}
              onChange={handleChange}
              onWheel={(e) => e.target.blur()}
              className="w-full px-4 py-2 border rounded"
            />
          </div>
          <div className="mb-4 w-full">
            <label className="block mb-2">Instructor</label>
            <select
              name="instructor"
              value={courseData.instructor}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded"
            >
              <option value="">Select Instructor</option>
              <option value="Ha Hoang Huynh">Ha Hoang Huynh</option>
              <option value="Kien Duong Trung">Kien Duong Trung</option>
            </select>
          </div>
        </div>
        <div className="flex items-center gap-x-10">
          <div className="mb-4 w-full">
            <label className="block mb-2">Course Type</label>
            <select
              name="type"
              value={courseData.type}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded"
            >
              <option value="">Select Course Type</option>
              <option value="Free-Course">Free Course</option>
              <option value="Fresher-Course">Fresher Course</option>
              <option value="Skill-Course">Skill Course</option>
            </select>
          </div>
          <div className="mb-4 w-full">
            <label className="block mb-2">Lesson</label>
            <input
              type="number"
              placeholder="Number of lesson"
              name="lesson"
              value={courseData.lesson}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded"
            />
          </div>
        </div>
        <div className="flex items-center gap-x-10">
          <div className="mb-4 w-full">
            <label className="block mb-2">Course Image</label>
            <input
              type="text"
              name="image"
              placeholder="Enter the thumbnail image for the course"
              value={courseData.image}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded"
            />
          </div>
          <div className="mb-4 w-full">
            <label className="block mb-2">Course URL</label>
            <input
              type="text"
              placeholder="Enter the URL of the course"
              name="targetUrl"
              value={courseData.targetUrl}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded"
            />
          </div>
        </div>
        <div className="flex items-center gap-10">
          <div className="mb-4 w-full">
            <label className="block mb-2">Price (Money)</label>
            <input
              type="text"
              name="money"
              placeholder="$ 15.00"
              value={courseData.money}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded"
            />
          </div>
          <div className="mb-4 w-full">
            <label className="block mb-2">Rating</label>
            <input
              type="number"
              step="0.1"
              placeholder="Feedback of course"
              name="rating"
              value={courseData.rating}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded"
            />
          </div>
          <div className="mb-4 w-full">
            <label className="block mb-2">Rating Amount</label>
            <input
              type="number"
              name="ratingAmount"
              placeholder="Rating Amount"
              value={courseData.ratingAmount}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded"
            />
          </div>
        </div>
        <button
          type="submit"
          className="my-4 block w-[300px] mx-auto bg-green-500 text-white px-10 py-4 rounded hover:bg-green-400 transition-all font-bold"
        >
          Add Course
        </button>
      </form>
    </div>
  );
};

export default AdminCreateNewCourse;
