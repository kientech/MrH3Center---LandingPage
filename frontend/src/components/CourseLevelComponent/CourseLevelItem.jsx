import React from "react";
import { HiAcademicCap } from "react-icons/hi2";
import ScrollAnimation from "react-animate-on-scroll";

const CourseLevelItem = ({ nameCourse, descriptionCourse }) => {
  return (
    <div className="transform transition-transform duration-300 hover:scale-105">
      <div className="bg-[#f0fdfa] px-9 py-8 mb-0 hover:bg-[#f0fdf4] hover:shadow-lg transition-all duration-300 rounded-lg">
        <HiAcademicCap className="w-auto mx-auto text-[#22c55e] text-center text-5xl " />
        <h1 className="text-2xl font-semibold mt-2 text-center">
          {nameCourse}
        </h1>
        <p className="mt-2 text-gray-600 text-center">{descriptionCourse}</p>
      </div>
    </div>
  );
};

export default CourseLevelItem;
