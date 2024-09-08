import React from "react";
import { HiMiniStar } from "react-icons/hi2";

const FeedbackItem = ({ feedbackDescription, feedbackName, course }) => {
  return (
    <div className="mt-4">
      <div className="bg-green-50 px-6 py-4 rounded-lg">
        <p
          style={{
            display: "-webkit-box",
            WebkitBoxOrient: "vertical",
            WebkitLineClamp: 3,
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {feedbackDescription}
        </p>

        <div className="flex items-center justify-between">
          <div className="flex items-center mt-4">
            <img
              src="https://cdn.dribbble.com/userupload/15482279/file/original-fc1e229b50309ef2f7b103125f25c192.png?resize=1504x1128"
              className="w-16 h-16 object-cover rounded-full mr-4"
              alt=""
            />

            <div>
              <h1 className="text-lg font-semibold text-gray-950">
                {feedbackName}
              </h1>
              <h2 className="text-md">{course}</h2>
            </div>
          </div>
          <div className="flex items-center">
            {[1, 2, 3, 4, 5].map((item) => (
              <HiMiniStar className="text-yellow-500" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedbackItem;
