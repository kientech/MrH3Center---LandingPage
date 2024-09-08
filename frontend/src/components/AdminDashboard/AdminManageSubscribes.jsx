import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const AdminManageSubscribes = () => {
  const [subscribes, setSubscribes] = useState([]);

  // Fetch the list of subscribes when the component mounts
  useEffect(() => {
    const fetchSubscribes = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:3000/api/subcribes");
        setSubscribes(response.data.data);
      } catch (error) {
        toast.error("Failed to fetch subscribes");
        console.error("Error fetching subscribes:", error);
      }
    };

    fetchSubscribes();
  }, []);

  // Handle deleting a subscribe
  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this subscription?")) {
      try {
        await axios.delete(`http://127.0.0.1:3000/api/subcribes/${id}`);
        setSubscribes(subscribes.filter((subscribe) => subscribe._id !== id));
        toast.success("Subscription deleted successfully!");
      } catch (error) {
        toast.error("Failed to delete subscription");
        console.error("Error deleting subscription:", error);
      }
    }
  };

  return (
    <div className="w-full mx-auto mt-10 mr-10 relative overflow-x-auto max-h-[800px] shadow-md sm:rounded-lg">
      <h1 className="text-2xl font-bold mb-5">Manage Subscribes</h1>
      <table className="w-full min-w-max text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400  ">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Email</th>
            <th className="py-2 px-4 border-b">Subscribed At</th>
            <th className="py-2 px-4 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          {subscribes.map((subscribe) => (
            <tr key={subscribe._id}>
              <td className="py-2 px-4 border-b">{subscribe.email}</td>
              <td className="py-2 px-4 border-b">
                {new Date(subscribe.createdAt).toLocaleString()}
              </td>
              <td className="py-2 px-4 border-b">
                <button
                  className="bg-red-500 text-white py-1 px-3 rounded hover:bg-red-600"
                  onClick={() => handleDelete(subscribe._id)}
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

export default AdminManageSubscribes;
