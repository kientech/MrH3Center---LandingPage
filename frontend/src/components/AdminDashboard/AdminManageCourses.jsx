import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const AdminManageCourses = () => {
  const [courses, setCourses] = useState([]);
  const [courseType, setCourseType] = useState("");
  const [instructor, setInstructor] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetchCourses();
  }, [courseType, instructor]);

  const fetchCourses = async () => {
    try {
      const params = {};
      if (courseType) params.type = courseType;
      if (instructor) params.instructor = instructor;

      const response = await axios.get(
        "http://127.0.0.1:3000/api/query/courses",
        {
          params,
        }
      );
      console.log("Fetched courses:", response.data.data); // Debugging
      setCourses(response.data.data);
    } catch (error) {
      console.error("There was an error fetching the courses!", error);
      toast.error("Failed to fetch courses.");
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://127.0.0.1:3000/api/courses/${id}`);
      toast.success("Course deleted successfully!");
      fetchCourses(); // Refresh the list after deletion
    } catch (error) {
      console.error("There was an error deleting the course!", error);
      toast.error("Failed to delete the course.");
    }
  };

  const handleEdit = (id) => {
    navigate(`/admin/edit-course/${id}`);
  };

  const handleStatusChange = async (id, newStatus) => {
    try {
      await axios.patch(`http://127.0.0.1:3000/api/courses/status/${id}`, {
        status: newStatus,
      });
      toast.success("Course status updated successfully!");
      fetchCourses(); // Refresh the list after status update
    } catch (error) {
      console.error("There was an error updating the course status!", error);
      toast.error("Failed to update course status.");
    }
  };

  return (
    <div className="w-full mx-auto mt-10 mr-10 relative overflow-x-auto max-h-[800px] shadow-md sm:rounded-lg">
      <h2 className="text-2xl font-bold mb-6">Manage Courses</h2>
      <div className="mb-6 flex gap-4">
        <div>
          <label
            htmlFor="courseType"
            className="block text-sm font-medium text-gray-700"
          >
            Course Type
          </label>
          <select
            id="courseType"
            value={courseType}
            onChange={(e) => setCourseType(e.target.value)}
            className="border rounded px-2 py-1"
          >
            <option value="">All</option>
            <option value="Free-Course">Free Course</option>
            <option value="Fresher-Course">Fresher Course</option>
            <option value="Skill-Course">Skill Course</option>
          </select>
        </div>

        <div>
          <label
            htmlFor="courseType"
            className="block text-sm font-medium text-gray-700"
          >
            Instuctor
          </label>
          <select
            id="instructor"
            value={instructor}
            onChange={(e) => setInstructor(e.target.value)}
            className="border rounded px-2 py-1"
          >
            <option value="">All</option>
            <option value="Ha Hoang Huynh">Ha Hoang Huynh</option>
            <option value="Kien Duong Trung">Kien Duong Trung</option>
          </select>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full min-w-max text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th className="px-6 sticky left-0 z-50 py-3">Title</th>
              <th className="px-6 py-3">Course Type</th>
              <th className="px-6 py-3">Instructor</th>
              <th className="px-6 py-3">Duration</th>
              <th className="px-6 py-3">Status</th>
              <th className="px-6 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {courses.length > 0 ? (
              courses.map((course) => (
                <tr
                  key={course._id}
                  className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
                >
                  <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white sticky left-0 z-50">
                    {course.title}
                  </td>
                  <td className="border-b px-6 py-4">{course.type}</td>
                  <td className="border-b px-6 py-4">{course.instructor}</td>
                  <td className="border-b px-6 py-4">
                    {course.duration} hours
                  </td>
                  <td className="border-b px-6 py-4 text-center">
                    <select
                      value={course.status}
                      onChange={(e) =>
                        handleStatusChange(course._id, e.target.value)
                      }
                      className={`border rounded px-2 py-1 ${
                        course.status === "pending"
                          ? "bg-orange-500 text-white"
                          : "bg-green-500 text-white"
                      }`}
                    >
                      <option value="pending">Pending</option>
                      <option value="approved">Approved</option>
                    </select>
                  </td>
                  <td className="py-2 border-b text-center">
                    <button
                      onClick={() => handleEdit(course._id)}
                      className="bg-yellow-500 text-white px-4 py-1 rounded mr-2"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(course._id)}
                      className="bg-red-500 text-white px-4 py-1 rounded"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="px-6 py-4 text-center text-gray-500">
                  No courses found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminManageCourses;
