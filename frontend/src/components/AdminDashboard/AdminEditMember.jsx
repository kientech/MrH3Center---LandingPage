import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

const AdminEditMember = () => {
  const { id } = useParams(); 
  const navigate = useNavigate();
  const [memberData, setMemberData] = useState({
    name: '',
    position: '',
    imageMember: '',
    facebookContact: '',
    instagramContact: '',
    xContact: '',
  });

  useEffect(() => {
    fetchMemberData();
  }, []);

  const fetchMemberData = async () => {
    try {
      const response = await axios.get(`http://127.0.0.1:3000/api/members/${id}`);
      setMemberData(response.data.data); 
    } catch (error) {
      console.error('There was an error fetching the member data!', error);
      toast.error('Failed to fetch member data.');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMemberData({ ...memberData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://127.0.0.1:3000/api/members/${id}`, memberData);
      toast.success('Member updated successfully!');
      navigate('/admin/members'); // Redirect to the members list page after update
    } catch (error) {
      console.error('There was an error updating the member!', error);
      toast.error('Failed to update member.');
    }
  };

  return (
    <div className="w-full mx-auto mt-10 mr-10">
      <h2 className="text-2xl font-bold mb-6">Update Member</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block mb-2">Name</label>
          <input
            type="text"
            name="name"
            value={memberData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Position</label>
          <input
            type="text"
            name="position"
            value={memberData.position}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Image URL</label>
          <input
            type="text"
            name="imageMember"
            value={memberData.imageMember}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Facebook Contact</label>
          <input
            type="text"
            name="facebookContact"
            value={memberData.facebookContact}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Instagram Contact</label>
          <input
            type="text"
            name="instagramContact"
            value={memberData.instagramContact}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">X Contact</label>
          <input
            type="text"
            name="xContact"
            value={memberData.xContact}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded"
          />
        </div>
        <button
          type="submit"
          className="my-4 w-full bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-400 transition-all font-bold"
        >
          Update Member
        </button>
      </form>
    </div>
  );
};

export default AdminEditMember;
