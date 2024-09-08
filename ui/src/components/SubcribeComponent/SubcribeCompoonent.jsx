import React, { useState } from "react";
import LineStyle from "../common/LineStyle";
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
    if (!email) {
      toast.error("Vui lòng nhập địa chỉ email");
      return;
    }

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbzAc7htMf4D68QadTCCsDlZscyhfk4wiQsgvL80BUbVy4MTmHcQrj32_7fYzC9QhxYm/exec",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: new URLSearchParams({
            email: email,
          }),
        }
      );

      const data = await response.json();
      if (data.status === "success") {
        toast.success("Đăng ký thành công!");
        setEmail("");
      } else {
        toast.error("Đăng ký thất bại. Vui lòng thử lại.");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("Đã xảy ra lỗi. Vui lòng thử lại.");
    }
  };

  return (
    <div style={backgroundImageStyle} className="md:mt-40 rounded-lg">
      <div className="p-5 md:w-[60%] w-full mx-auto">
        <div className="flex items-center justify-center">
          <LineStyle />
          <h1 className="font-base md:text-xl text-md px-2 text-white ">
            Subscribe
          </h1>
          <LineStyle />
        </div>

        <h1 className="font-bold text-white md:text-3xl text-xl text-center">
          Stay Always In Touch
        </h1>
        <p className="my-2 font-base md:text-md text-sm text-white text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas eos
          impedit officiis voluptas et mollitia.
        </p>

        <div className="md:w-[60%] w-full flex items-center mx-auto md:mt-8 mt-0">
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
