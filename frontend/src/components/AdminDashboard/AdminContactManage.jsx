import React, { useEffect, useState } from "react";
import axios from "axios";

const AdminContactManage = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:3000/api/contacts");
      setContacts(response.data.data);
    } catch (error) {
      console.error("Error fetching contacts:", error);
    }
  };

  const deleteContact = async (id) => {
    try {
      await axios.delete(`http://127.0.0.1:3000/api/contacts/${id}`);
      setContacts(contacts.filter((contact) => contact._id !== id));
    } catch (error) {
      console.error("Error deleting contact:", error);
    }
  };

  const toggleReadStatus = async (id) => {
    try {
      const response = await axios.patch(
        `http://127.0.0.1:3000/api/contacts/${id}/read`
      );
      setContacts(
        contacts.map((contact) =>
          contact._id === id
            ? { ...contact, read: response.data.contact.read }
            : contact
        )
      );
    } catch (error) {
      console.error("Error updating read status:", error);
    }
  };

  return (
    <div className="w-full mx-auto p-6">
      <h1 className="text-3xl font-semibold mb-4">Contact Management</h1>
      {contacts.length > 0 ? (
        <table className="w-full text-left">
          <thead>
            <tr>
              <th className="border-b p-2">Name</th>
              <th className="border-b p-2">Email</th>
              <th className="border-b p-2">Message</th>
              <th className="border-b p-2">Interests</th>
              <th className="border-b p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact) => (
              <tr
                key={contact._id}
                className={contact.read ? "text-gray-500" : "font-bold"}
              >
                <td
                  className="border-b p-2 cursor-pointer"
                  onClick={() => toggleReadStatus(contact._id)}
                >
                  {contact.name}
                </td>
                <td className="border-b p-2">{contact.email}</td>
                <td className="border-b p-2">{contact.message}</td>
                <td className="border-b p-2">
                  {contact.interests.web && <span>Web </span>}
                  {contact.interests.app && <span>App </span>}
                  {contact.interests.ml && <span>ML </span>}
                </td>
                <td className="border-b p-2">
                  <button
                    onClick={() => deleteContact(contact._id)}
                    className="text-red-600 hover:text-red-800"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No contacts found.</p>
      )}
    </div>
  );
};

export default AdminContactManage;
