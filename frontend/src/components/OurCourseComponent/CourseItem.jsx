import React, { useState, useRef, useEffect } from "react";
import { HiAcademicCap } from "react-icons/hi2";

const CourseItem = ({
  courseName,
  description,
  link,
  courseImage,
  tagName,
  typeCourse,
  instructor,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalRef = useRef(null);

  const handleButtonClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleOverlayClick = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      setIsModalOpen(false);
    }
  };

  useEffect(() => {
    if (isModalOpen) {
      document.addEventListener("mousedown", handleOverlayClick);
    } else {
      document.removeEventListener("mousedown", handleOverlayClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOverlayClick);
    };
  }, [isModalOpen]);

  return (
    <div className="group">
      <div className="bg-[#f0fdf4] px-9 py-8 mb-0 group-hover:animate-hover-slide group-hover:animate-hover-shadow shadow-sm transition-all duration-300 ease-in-out rounded-lg group-hover:overflow-hidden">
        <HiAcademicCap className="w-auto mx-auto text-[#22c55e] text-center text-5xl " />
        <h1 onClick={handleButtonClick} className="cursor-pointer hover:text-green-500 transition-all text-2xl font-semibold mt-2 text-center">
          {courseName}
        </h1>
        <p
          className="mt-2 text-gray-600 text-center font-base overflow-hidden text-ellipsis"
          style={{
            display: "-webkit-box",
            WebkitBoxOrient: "vertical",
            WebkitLineClamp: 3,
            lineClamp: 3,
          }}
        >
          {description}
        </p>
        <button
          onClick={handleButtonClick}
          className="font-bold text-lg px-8 py-2 rounded-lg bg-green-200 hover:bg-green-300 text-lime-600 w-[50%] flex justify-center mx-auto mt-4"
        >
          Let's go
        </button>
      </div>

      {isModalOpen && (
        <div className="py-10 fixed inset-0 bg-black z-50 bg-opacity-50 flex items-center justify-center overflow-y-auto">
          <div
            ref={modalRef}
            className="bg-white p-8 rounded-lg shadow-lg max-w-4xl w-full relative"
          >
            <button
              onClick={handleCloseModal}
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <h2 className="text-2xl font-semibold mb-4">{courseName}</h2>
            <hr />
            <img src={courseImage} className="h-[400px] w-full object-cover my-2 rounded-lg" alt="" />

            <div className="flex mt-4 items-center justify-between">
              <span className="inline-block py-1 px-6 rounded-lg bg-green-200 text-red-400">
                {tagName}
              </span>
              <span className="inline-block py-1 px-6 rounded-lg bg-yellow-200 text-red-400 font-semibold">
                {typeCourse}
              </span>
            </div>

            <div className="my-2">
              <h1 className="font-base text-lg">
                Instructor:{" "}
                <span className="font-bold text-green-500">{instructor}</span>
              </h1>
            </div>

            <div className="my-2">
              <h1 className="font-bold text-lg text-red-400">Description</h1>
              <p>{description}</p>
            </div>

            <div>
              <h1></h1>
            </div>
            <button
              onClick={handleCloseModal}
              className="mt-4 bg-red-500 text-white px-4 py-2 rounded-lg"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CourseItem;
