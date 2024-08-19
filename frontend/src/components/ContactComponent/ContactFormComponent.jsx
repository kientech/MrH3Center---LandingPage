import React, { useState } from "react";
import axios from "axios";
import { HiOutlinePhone } from "react-icons/hi";
import { Link } from "react-router-dom";
import { HiUser } from "react-icons/hi";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { toast } from "react-toastify";
import { FaRegEnvelope } from "react-icons/fa";

const ContactFormComponent = () => {
  const [interests, setInterests] = useState({
    web: false,
    app: false,
    ml: false,
  });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInterestChange = (e) => {
    const { name, checked } = e.target;
    setInterests({ ...interests, [name]: checked });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://127.0.0.1:3000/api/contacts", {
        interests,
        ...formData,
      });
      toast.success("Send Contact Successful");
    } catch (error) {
      toast.error("Sending Error!", error);
    }
  };
  return (
    <section
      id="contact"
      className="my-20 w-full h-full md:p-10 p-4 bg-green-50 md:flex rounded-xl"
    >
      <div className="md:w-[50%] h-full flex flex-col justify-between">
        <h1 className="md:text-4xl w-full text-2xl font-base font-semibold">
          Let's discuss on something
          <span className="font-bold text-green-600"> cool</span> <br />
          together
        </h1>
        <p className="my-4">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora tenetur minima aliquid excepturi architecto esse quae laudantium culpa non aliquam labore sapiente, pariatur eum adipisci beatae quasi soluta doloremque illum.
        </p>
        <div className="md:space-y-4 space-y-2 md:my-32 my-4">
          <div className="flex items-center gap-x-4">
            <HiOutlinePhone />
            <h1 className="font-semibold">0968 384 643</h1>
          </div>
          <div className="flex items-center gap-x-4">
            <FaRegEnvelope />
            <h1 className="font-semibold">hahoanghuynh@gmail.com</h1>
          </div>
          <div className="flex items-center gap-x-4">
            <HiOutlinePhone />
            <h1 className="font-semibold">0968 384 643</h1>
          </div>
        </div>
        <div className="flex justify-center items-center gap-10">
          <Link>
            <FaFacebookF size={30}/>
          </Link>
          <Link>
            <FaInstagram size={30}/>
          </Link>
          <Link>
            <FaLinkedinIn size={30}/>
          </Link>
        </div>
      </div>
      <div className="md:w-[50%] w-full my-4">
        <form
          onSubmit={handleSubmit}
          className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-lg"
        >
          <h1 className="text-2xl font-semibold mb-4">I'm interested in...</h1>
          <div className="flex gap-4 mb-6">
            <label className="flex items-center">
              <div className="toggle-switch">
                <input
                  type="checkbox"
                  name="web"
                  checked={interests.web}
                  onChange={handleInterestChange}
                />
                <span className="toggle-slider"></span>
              </div>
              <span className="ml-2">Web</span>
            </label>
            <label className="flex items-center">
              <div className="toggle-switch">
                <input
                  type="checkbox"
                  name="app"
                  checked={interests.app}
                  onChange={handleInterestChange}
                />
                <span className="toggle-slider"></span>
              </div>
              <span className="ml-2">App</span>
            </label>
            <label className="flex items-center">
              <div className="toggle-switch">
                <input
                  type="checkbox"
                  name="ml"
                  checked={interests.ml}
                  onChange={handleInterestChange}
                />
                <span className="toggle-slider"></span>
              </div>
              <span className="ml-2">ML</span>
            </label>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full p-3 border rounded-lg"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full p-3 border rounded-lg"
              required
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-sm font-semibold mb-2"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              className="w-full p-3 border rounded-lg"
              rows="5"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactFormComponent;
