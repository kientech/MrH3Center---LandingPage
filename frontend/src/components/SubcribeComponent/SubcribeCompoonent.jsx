import React, { useState } from "react";
import axios from "axios";
import LineStyle from "../common/LineStyle";
import { HiMiniRocketLaunch } from "react-icons/hi2";
import { toast } from "react-toastify";

const SubcribeCompoonent = () => {
  const [email, setEmail] = useState("");

  const backgroundImageStyle = {
    backgroundImage:
      "url('https://cdn.dribbble.com/userupload/7483025/file/original-e85909f0f9a6b190acb8eeb96b327cc2.png?resize=1504x1128')",
    backgroundSize: "cover",
    backgroundPosition: "top",
    backgroundRepeat: "no-repeat",
    height: "30vh",
  };

  const handleSend = async () => {
    if (email) {
      try {
        const response = await axios.post(
          "http://127.0.0.1:3000/api/subcribes",
          { email }
        );
        toast.success("Thanks for your subscription!");
        setEmail(""); // Clear the input after successful submission
      } catch (error) {
        if (error.response && error.response.data.error) {
          toast.error(error.response.data.error); // Display specific error message from the backend
        } else {
          toast.error("An error occurred. Please try again later.");
        }
      }
    } else {
      toast.warning("Please enter an email address.");
    }
  };

  return (
    <div style={backgroundImageStyle} className="mt-40 rounded-lg">
      <div className="p-5 w-[60%] mx-auto">
        <div className="flex items-center justify-center">
          <LineStyle />
          <h1 className="font-base text-xl px-2 text-white">Subscribe</h1>
          <LineStyle />
        </div>

        <h1 className="font-bold text-white text-3xl text-center">
          Stay Always In Touch
        </h1>
        <p className="my-2 font-base text-md text-white text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas eos
          impedit officiis voluptas et mollitia ut at qui hic eius, excepturi
          adipisci atque minima distinctio? Corporis enim nesciunt sed quos.
        </p>

        <div className="w-[60%] flex items-center mx-auto mt-8">
          <input
            type="text"
            placeholder="example@gmail.com"
            className="w-full outline-none border focus:border-green-500 p-2 rounded-lg"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            className="ml-2 py-2 px-4 rounded-lg bg-green-200 text-red-400"
            onClick={handleSend}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default SubcribeCompoonent;
