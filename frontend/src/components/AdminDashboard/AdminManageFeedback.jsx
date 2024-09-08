import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

const AdminManageFeedback = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  console.log("🚀 ~ AdminManageFeedback ~ feedbacks:", feedbacks);

  useEffect(() => {
    fetchFeedbacks();
  }, []);

  const fetchFeedbacks = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:3000/api/feedbacks");
      setFeedbacks(response.data.data);
    } catch (error) {
      console.error("Error fetching feedbacks:", error);
      toast.error("Failed to fetch feedbacks.");
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this feedback?")) {
      try {
        await axios.delete(`http://127.0.0.1:3000/api/feedbacks/${id}`);
        setFeedbacks(feedbacks.filter((feedback) => feedback._id !== id));
        toast.success("Feedback deleted successfully!");
      } catch (error) {
        console.error("Error deleting feedback:", error);
        toast.error("Failed to delete feedback.");
      }
    }
  };

  return (
    <div className="w-full mx-auto mt-10 mr-10 relative overflow-x-auto max-h-[800px] shadow-md sm:rounded-lg">
      <h1 className="text-2xl font-bold mb-6">Manage Feedback</h1>
      <Link to="/admin/add-feedback">
        <button className="mb-4 w-[200px] bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-400 transition-all font-bold">
          New Feedback
        </button>
      </Link>
      <table className="w-full min-w-max text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th className="px-6 sticky left-0 z-50 py-3">Full Name</th>
            <th className="px-6 py-3">Feedback Content</th>
            <th className="px-6 py-3">Course</th>
            <th className="px-6 py-3">Rating</th>
            <th className="px-6 py-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          {feedbacks.map((feedback) => (
            <tr key={feedback._id}>
              <td className="border p-4 sticky left-0 font-bold">{feedback.feedbackName}</td>
              <td className="border p-4">{feedback.feedbackDescription}</td>
              <td className="border p-4">{feedback.position}</td>
              <td className="border p-4">{feedback.rating}</td>
              <td className="border p-4">
                <Link
                  to={`/admin/edit-feedback/${feedback._id}`}
                  className="text-blue-500 hover:underline"
                >
                  Edit
                </Link>
                <button
                  onClick={() => handleDelete(feedback._id)}
                  className="text-red-500 bg-red-100 hover:underline ml-4 px-2 py-1 rounded-lg"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminManageFeedback;
