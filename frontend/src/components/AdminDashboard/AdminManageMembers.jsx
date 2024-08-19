import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const AdminManageMembers = () => {
  const [members, setMembers] = useState([]);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetchMembers();
  }, [search]);

  const fetchMembers = async () => {
    try {
      const params = search ? { search } : {};
      const response = await axios.get("http://127.0.0.1:3000/api/members", {
        params,
      });
      console.log("Fetched members:", response.data.data); // Debugging
      setMembers(response.data.data);
    } catch (error) {
      console.error("There was an error fetching the members!", error);
      toast.error("Failed to fetch members.");
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://127.0.0.1:3000/api/members/${id}`);
      toast.success("Member deleted successfully!");
      fetchMembers(); // Refresh the list after deletion
    } catch (error) {
      console.error("There was an error deleting the member!", error);
      toast.error("Failed to delete the member.");
    }
  };

  const handleEdit = (id) => {
    navigate(`/admin/edit-member/${id}`);
  };

  return (
    <div className="w-full mx-auto mt-10 mr-10 relative overflow-x-auto max-h-[800px] shadow-md sm:rounded-lg">
      <h2 className="text-2xl font-bold mb-6">Manage Members</h2>
      <div className="mb-6 flex gap-4">
        <div>
          <label
            htmlFor="search"
            className="block text-sm font-medium text-gray-700"
          >
            Search
          </label>
          <input
            id="search"
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border rounded px-2 py-1"
            placeholder="Search by name or position"
          />
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full min-w-max text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th className="px-6 sticky left-0 z-50 py-3">Name</th>
              <th className="px-6 py-3">Position</th>
              <th className="px-6 py-3">Image</th>
              <th className="px-6 py-3">Facebook</th>
              <th className="px-6 py-3">Instagram</th>
              <th className="px-6 py-3">X</th>
              <th className="px-6 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {members.length > 0 ? (
              members.map((member) => (
                <tr
                  key={member._id}
                  className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
                >
                  <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white sticky left-0 z-50">
                    {member.name}
                  </td>
                  <td className="border-b px-6 py-4">{member.position}</td>
                  <td className="border-b px-6 py-4">
                    <img
                      src={member.imageMember}
                      alt={member.name}
                      className="w-12 h-12 object-cover rounded-full"
                    />
                  </td>
                  <td className="border-b px-6 py-4">
                    <a
                      href={member.facebookContact}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {member.facebookContact}
                    </a>
                  </td>
                  <td className="border-b px-6 py-4">
                    <a
                      href={member.instagramContact}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {member.instagramContact}
                    </a>
                  </td>
                  <td className="border-b px-6 py-4">
                    <a
                      href={member.xContact}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {member.xContact}
                    </a>
                  </td>
                  <td className="py-2 border-b text-center">
                    <button
                      onClick={() => handleEdit(member._id)}
                      className="bg-yellow-500 text-white px-4 py-1 rounded mr-2"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(member._id)}
                      className="bg-red-500 text-white px-4 py-1 rounded"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7" className="px-6 py-4 text-center text-gray-500">
                  No members found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminManageMembers;
