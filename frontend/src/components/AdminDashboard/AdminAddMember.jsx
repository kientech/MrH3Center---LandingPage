import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const AdminAddMember = () => {
  const [formData, setFormData] = useState({
    name: "",
    position: "",
    imageMember: "",
    facebookContact: "",
    instagramContact: "",
    xContact: "",
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
      await axios.post("http://127.0.0.1:3000/api/members", formData);
      toast.success("Add Member Successfully!");
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="w-full mx-auto mt-10 mr-10">
      <h1 className="text-2xl font-bold mb-6">Add New Member</h1>
      <form onSubmit={handleSubmit}>
        <label className="block mb-2">
          Name:
          <input
          className="w-full px-4 py-2 border rounded"
            type="text"
            name="name"
            placeholder="Enter name of member"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>
        <label className="block mb-2">
          Position:
          <input
          className="w-full px-4 py-2 border rounded"
            type="text"
            name="position"
            placeholder="Enter position of member"
            value={formData.position}
            onChange={handleChange}
          />
        </label>
        <label className="block mb-2">
          Image URL:
          <input
          className="w-full px-4 py-2 border rounded"
            type="text"
            name="imageMember"
            placeholder="Avatar member"
            value={formData.imageMember}
            onChange={handleChange}
          />
        </label>
        <label className="block mb-2">
          Facebook Contact:
          <input
          className="w-full px-4 py-2 border rounded"
            type="text"
            name="facebookContact"
            placeholder="Facebook contact"
            value={formData.facebookContact}
            onChange={handleChange}
          />
        </label>
        <label className="block mb-2">
          Instagram Contact:
          <input
          className="w-full px-4 py-2 border rounded"
            type="text"
            name="instagramContact"
            placeholder="Instagram contact"
            value={formData.instagramContact}
            onChange={handleChange}
          />
        </label>
        <label className="block mb-2">
          X Contact:
          <input
          className="w-full px-4 py-2 border rounded"
            type="text"
            name="xContact"
            placeholder="x contact"
            value={formData.xContact}
            onChange={handleChange}
          />
        </label>
        <button type="submit" className="inline-block w-[50%] mx-auto py-2 px-6 rounded-lg bg-green-300 text-lg font-bold text-white mt-4">Add Member</button>
      </form>
    </div>
  );
};

export default AdminAddMember;
