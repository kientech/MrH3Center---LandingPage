import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const AdminCreateNewProject = () => {
  const [projectData, setprojectData] = useState({
    name: "",
    tag: "",
    description: "",
    technicalTools: "",
    author: "",
    projectUrl: "",
    image: "",
    videoUrl: "",
    rating: "",
    ratingAmount: "",
  });

  const initialProjectData = {
    name: "",
    tag: "",
    description: "",
    technicalTools: "",
    author: "",
    projectUrl: "",
    image: "",
    videoUrl: "",
    rating: "",
    ratingAmount: "",
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setprojectData({ ...projectData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://127.0.0.1:3000/api/projects",
        projectData
      );
      toast.success("Create New Project Success!!!");
      setprojectData(initialProjectData);
    } catch (error) {
      console.error("There was an error adding the Project!", error);
      toast.error(error.message);
    }
  };

  return (
    <div className="w-full mx-auto mt-10 mr-10">
      <h2 className="text-2xl font-bold mb-6">Create a New Project</h2>
      <form onSubmit={handleSubmit}>
        <div className="flex items-center gap-x-10">
          <div className="mb-4 w-full">
            <label className="block mb-2">Project Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter the name of your project"
              value={projectData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded"
            />
          </div>
          <div className="mb-4 w-full">
            <label className="block mb-2">Tag</label>
            <select
              name="tag"
              value={projectData.tag}
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
            value={projectData.description}
            placeholder="Write a description of the project"
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded"
          ></textarea>
        </div>
        <div className="flex items-center gap-x-10">
          <div className="mb-4 w-full">
            <label className="block mb-2">Technical Tools</label>
            <input
              type="text"
              name="technicalTools"
              placeholder="Example: Python, Scikit-learn, Tensorflow, React,..."
              value={projectData.technicalTools}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded"
            />
          </div>
          <div className="mb-4 w-full">
            <label className="block mb-2">Author</label>
            <select
              name="instructor"
              value={projectData.instructor}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded"
            >
              <option value="">Select Author</option>
              <option value="Ha Hoang Huynh">Ha Hoang Huynh</option>
              <option value="Kien Duong Trung">Kien Duong Trung</option>
            </select>
          </div>
        </div>
        <div className="flex items-center gap-x-10">
          <div className="mb-4 w-full">
            <label className="block mb-2">Project Image</label>
            <input
              type="text"
              name="image"
              value={projectData.image}
              onChange={handleChange}
              placeholder="Thumbnail image of the project"
              className="w-full px-4 py-2 border rounded"
            />
          </div>
          <div className="mb-4 w-full">
            <label className="block mb-2">Project URL</label>
            <input
              type="text"
              name="projectUrl"
              placeholder="Enter the target link for this project"
              value={projectData.projectUrl}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded"
            />
          </div>
          <div className="mb-4 w-full">
            <label className="block mb-2">Video URL</label>
            <input
              type="text"
              name="videoUrl"
              placeholder="Introduction video of the project"
              value={projectData.videoUrl}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded"
            />
          </div>
        </div>
        <div className="flex items-center gap-x-10">
          <div className="mb-4 w-full">
            <label className="block mb-2">Rating</label>
            <input
              type="number"
              step="0.1"
              name="rating"
              placeholder="Rating"
              value={projectData.rating}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded"
            />
          </div>
          <div className="mb-4 w-full">
            <label className="block mb-2">Rating Amount</label>
            <input
              type="number"
              name="ratingAmount"
              placeholder="Rating amount"
              value={projectData.ratingAmount}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded"
            />
          </div>
        </div>
        <button
          type="submit"
          className="my-4 block w-[300px] mx-auto bg-green-500 text-white px-10 py-4 rounded hover:bg-green-400 transition-all font-bold"
        >
          Add Project
        </button>
      </form>
    </div>
  );
};

export default AdminCreateNewProject;
