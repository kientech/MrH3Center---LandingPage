import React, { useState, useRef, useEffect } from "react";

const OurProjectItem = ({
  projectImage,
  projectTag,
  projectName,
  author,
  technicalTools,
  description,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalRef = useRef(null);

  const handleButtonClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    console.log("Close button clicked"); // Kiểm tra xem sự kiện có được kích hoạt hay không
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
    <div
      onClick={handleButtonClick}
      className="w-full group shadow-sm rounded-lg bg-[#fefce8] cursor-pointer"
    >
      <div className="overflow-hidden rounded-lg">
        <img
          src={projectImage}
          alt={projectName}
          className="w-full h-full rounded-lg group-hover:scale-105 transition-all object-cover block"
        />
      </div>
      <div className="p-4 rounded-lg">
        <span className="font-primary inline-block md:px-3 md:py-2 p-2 bg-green-100 text-red-400 rounded-lg">
          {projectTag}
        </span>
        <h1 className="md:text-xl text-md font-bold group-hover:text-green-700 text-gray-950 mt-4 title_project">
          {projectName}
        </h1>
      </div>

      {isModalOpen && (
        <div className="font-primary px-4 pt-40 md:p-10 fixed inset-0 bg-black z-50 bg-opacity-50 flex items-center justify-center overflow-y-auto">
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
            <h2 className="text-2xl font-semibold mb-4">{projectName}</h2>
            <hr />
            <img
              src={projectImage}
              className="h-[400px] w-full object-cover my-2 rounded-lg"
              alt=""
            />

            <div className="flex mt-4 items-center justify-between">
              <span className="inline-block py-1 px-6 rounded-lg bg-green-200 text-red-400">
                {projectTag}
              </span>
            </div>

            <div className="my-2">
              <h1 className="font-base text-lg">
                Author:{" "}
                <span className="font-bold text-green-500">{author}</span>
              </h1>
            </div>

            <div className="my-2">
              <h1 className="font-bold text-lg text-red-400">
                Technical Tools
              </h1>
              <p>{technicalTools}</p>
            </div>

            <div className="my-2">
              <h1 className="font-semibold text-lg ">Description: </h1>
              <span className="font-base">{description}</span>
            </div>

            <button className="mt-4 bg-green-400 text-white px-4 py-2 rounded-lg">
              Go to
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default OurProjectItem;
