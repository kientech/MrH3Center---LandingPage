import React, { useState } from "react";
import { HiOutlinePhone } from "react-icons/hi";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaRegEnvelope,
} from "react-icons/fa";
import { toast } from "react-toastify";

const ContactFormComponent = () => {
  const [loading, setLoading] = useState(false);
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
    setInterests({
      ...interests,
      [e.target.name]: e.target.checked,
    });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all information.");
      return;
    }
    setLoading(true);
    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbxBdekQg0LCYurlsST5rzIS2b4RIOdZ0jPzRjeMCtmiJmAz3SlMyLdAVKVvsHnAxPQcfA/exec",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: new URLSearchParams({
            name: formData.name,
            email: formData.email,
            message: formData.message,
            web: interests.web,
            app: interests.app,
            ml: interests.ml,
            timestamp: new Date().toLocaleString(),
          }),
        }
      );

      const data = await response.json();
      if (data.status === "success") {
        toast.success("Send Message Successfully!");
        setFormData({
          name: "",
          email: "",
          message: "",
        });
        setInterests({
          web: false,
          app: false,
          ml: false,
        });
      } else {
        toast.error("Sending information failed. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("An error occurred. Please try again.");
    } finally {
      setLoading(false);
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
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora
          tenetur minima aliquid excepturi architecto esse quae laudantium culpa
          non aliquam labore sapiente, pariatur eum adipisci beatae quasi soluta
          doloremque illum.
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
        </div>
        <div className="flex justify-center items-center gap-10">
          <Link>
            <FaFacebookF size={30} />
          </Link>
          <Link>
            <FaInstagram size={30} />
          </Link>
          <Link>
            <FaLinkedinIn size={30} />
          </Link>
        </div>
      </div>
      <div className="md:w-[50%] w-full my-4">
        <form
          className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-lg"
          onSubmit={handleSubmit}
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
              onChange={handleChange}
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
              onChange={handleChange}
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
              onChange={handleChange}
              className="w-full p-3 border rounded-lg"
              rows="5"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactFormComponent;
