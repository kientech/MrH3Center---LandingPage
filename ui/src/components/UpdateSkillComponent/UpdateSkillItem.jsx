import React, { useEffect, useState, useRef } from "react";
import {
  HiMiniCommandLine,
  HiMiniStar,
  HiMiniArrowUpRight,
} from "react-icons/hi2";

const UpdateSkillItem = ({
  image,
  courseTag,
  courseName,
  durations,
  lessons,
  instructor,
  price,
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
    <>
      <div
        className="group w-full md:flex gap-y-10 rounded-lg items-stretch cursor-pointer hover:bg-green-50 transition-all"
        onClick={handleButtonClick}
      >
        <div className="flex-shrink-0 max-h-full md:max-w-[320px] w-full overflow-hidden rounded-lg mr-8">
          <img
            src={image}
            alt=""
            className="group-hover:scale-105 transition-all w-full h-full rounded-lg"
          />
        </div>
        <div className="flex-1 flex flex-col justify-between">
          <div>
            <span className="md:px-4 md:py-1 px-2 py-1 rounded-lg bg-green-100 text-red-400 md:font-semibold font-base mt-2 inline-block">
              {courseTag}
            </span>
            <h1 className="my-2 text-xl font-bold group-hover:text-green-600 transition-all">
              {courseName}
            </h1>
            <div className="flex items-center">
              <div className="flex items-center gap-x-3">
                <HiMiniCommandLine />
                <span>{durations} hour</span>
              </div>
              <div className="h-4 w-0.5 bg-gray-300 rounded-lg mx-8"></div>
              <div className="flex items-center gap-x-3">
                <HiMiniCommandLine />
                <span>{lessons} lessons</span>
              </div>
            </div>
            <div className="flex items-center mt-2">
              <span className="text-sm mr-2">4.5</span>
              {[1, 2, 3, 4, 5].map((item) => (
                <HiMiniStar key={item} className="text-yellow-600" />
              ))}
              <span className="text-sm italic ml-2">(9)</span>
            </div>
            <div className="flex items-center mt-4">
              <img
                src="https://cdn.dribbble.com/userupload/11765781/file/original-25107b79f453b42b51ec652c08046bab.png?resize=1504x1128"
                className="w-10 h-10 rounded-full mr-4 shadow-md"
                alt=""
              />
              <span className="mr-2">by</span>
              <h1 className="font-semibold italic">{instructor}</h1>
            </div>
          </div>
          <div className="flex items-center justify-between border-t mt-2 border-t-gray-100">
            <span className="py-2">$ {price}</span>
            <button className="flex items-center py-2 ">
              <span className="hover:underline">Enroll Course</span>
              <HiMiniArrowUpRight />
            </button>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="font-primary md:pt-20 px-4 pt-40 md:p-10 fixed inset-0 bg-black z-50 bg-opacity-50 flex items-center justify-center overflow-y-auto">
          <div
            ref={modalRef}
            className="bg-white p-8 rounded-lg shadow-lg md:max-w-4xl max-w-md w-full relative"
            onClick={(e) => e.stopPropagation()} // Ngăn chặn sự kiện click từ overlay
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
            <img
              src={image}
              className="h-[400px] w-full object-cover my-2 rounded-lg"
              alt=""
            />

            <div className="flex mt-4 items-center justify-between">
              <span className="inline-block py-1 px-6 rounded-lg bg-green-200 text-red-400">
                {courseTag}
              </span>
            </div>

            <div className="my-2">
              <h1 className="font-base text-lg">
                Instructor:{" "}
                <span className="font-bold text-green-500">{instructor}</span>
              </h1>
            </div>

            <div className="my-2">
              <h1 className="font-bold text-lg text-red-400">Lessons</h1>
              <p>{lessons} lessons</p>
            </div>

            <div className="my-2">
              <h1 className="font-semibold text-lg ">Duration: </h1>
              <span className="font-base">{durations} hours</span>
            </div>

            <button className="mt-4 bg-green-400 text-white px-4 py-2 rounded-lg">
              Enroll Now
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default UpdateSkillItem;
