import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const AdminAddFeedback = () => {
  const [formData, setFormData] = useState({
    feedbackName: "",
    feedbackDescription: "",
    rating: "",
    position: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://127.0.0.1:3000/api/feedbacks", formData);
      toast.success("Add Feedback Successfully!");
    } catch (error) {
      toast.error(error.message);
    }
  };
  return (
    <div className="w-full mx-auto mt-10 mr-10">
      <h1 className="text-2xl font-bold mb-6">Add Feedback Member</h1>
      <form onSubmit={handleSubmit}>
        <label className="block mb-2">
          Full Name
          <input
            className="w-full px-4 py-2 border rounded"
            type="text"
            name="feedbackName"
            value={formData.feedbackName}
            onChange={handleChange}
            required
          />
        </label>
        <label className="block mb-2">
          Feedback Content
          <input
            className="w-full px-4 py-2 border rounded"
            type="text"
            name="feedbackDescription"
            value={formData.feedbackDescription}
            onChange={handleChange}
          />
        </label>
        <label className="block mb-2">
          Course
          <input
            className="w-full px-4 py-2 border rounded"
            type="text"
            name="position"
            value={formData.position}
            onChange={handleChange}
          />
        </label>
        <label className="block mb-2">
          Rating:
          <input
            className="w-full px-4 py-2 border rounded"
            type="number"
            name="rating"
            value={formData.rating}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Add Feedback</button>
      </form>
    </div>
  );
};

export default AdminAddFeedback;
