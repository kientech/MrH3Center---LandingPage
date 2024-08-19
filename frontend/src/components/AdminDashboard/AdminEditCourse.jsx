import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

const AdminEditCourse = () => {
  const { id } = useParams(); // Lấy ID của khóa học từ URL
  const navigate = useNavigate();
  const [courseData, setCourseData] = useState({
    title: '',
    tag: '',
    description: '',
    duration: '',
    instructor: '',
    type: '',
    image: '',
    targetUrl: '',
    money: '',
    rating: '',
    ratingAmount: '',
  });

  useEffect(() => {
    fetchCourseData();
  }, []);

  const fetchCourseData = async () => {
    try {
      const response = await axios.get(`http://127.0.0.1:3000/api/courses/${id}`);
      setCourseData(response.data); 
    } catch (error) {
      toast.error('Cannot Get Course Data');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCourseData({ ...courseData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://127.0.0.1:3000/api/courses/${id}`, courseData);
      toast.success('Khóa học đã được cập nhật thành công!');
      navigate('/admin'); // Quay lại trang quản trị sau khi cập nhật
    } catch (error) {
      console.error('Có lỗi xảy ra khi cập nhật khóa học!', error);
      toast.error('Không thể cập nhật khóa học.');
    }
  };

  return (
    <div className="w-full mx-auto mt-10 mr-10">
      <h2 className="text-2xl font-bold mb-6">Update Course</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block mb-2">Course Name</label>
          <input
            type="text"
            name="title"
            value={courseData.title}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Tag</label>
          <select
            name="tag"
            value={courseData.tag}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded"
          >
            <option value="">Select Tag</option>
            <option value="Web Development">Web Development</option>
            <option value="App Mobile">App Mobile</option>
            <option value="Micro-Processing">Micro-Processing</option>
            <option value="Machine Learning">Machine Learning</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block mb-2">Description</label>
          <textarea
            name="description"
            value={courseData.description}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded"
          />
        </div>
        <div className="flex items-center gap-x-6 mb-4">
          <div className="w-full">
            <label className="block mb-2">Duration (hour)</label>
            <input
              type="number"
              name="duration"
              value={courseData.duration}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded"
            />
          </div>
          <div className="w-full">
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
        <div className="mb-4">
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
          </select>
        </div>
        <div className="flex items-center gap-x-6 mb-4">
          <div className="w-full">
            <label className="block mb-2">Image URL</label>
            <input
              type="text"
              name="image"
              value={courseData.image}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded"
            />
          </div>
          <div className="w-full">
            <label className="block mb-2">Course URL</label>
            <input
              type="text"
              name="targetUrl"
              value={courseData.targetUrl}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded"
            />
          </div>
        </div>
        <div className="flex items-center gap-x-6 mb-4">
          <div className="w-full">
            <label className="block mb-2">Price</label>
            <input
              type="text"
              name="money"
              value={courseData.money}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded"
            />
          </div>
          <div className="w-full">
            <label className="block mb-2">Rating</label>
            <input
              type="number"
              step="0.1"
              name="rating"
              value={courseData.rating}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded"
            />
          </div>
          <div className="w-full">
            <label className="block mb-2">Rating Amout</label>
            <input
              type="number"
              name="ratingAmount"
              value={courseData.ratingAmount}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded"
            />
          </div>
        </div>
        <button
          type="submit"
          className="my-4 w-full bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-400 transition-all font-bold"
        >
          Update Course
        </button>
      </form>
    </div>
  );
};

export default AdminEditCourse;
