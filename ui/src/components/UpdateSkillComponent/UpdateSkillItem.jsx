import React from "react";
import { HiMiniCommandLine, HiMiniStar } from "react-icons/hi2";
import { HiMiniArrowUpRight } from "react-icons/hi2";

const UpdateSkillItem = ({
  image,
  courseTag,
  courseName,
  durations,
  lessons,
  instructor,
  price,
}) => {
  return (
    <div className="group w-full md:flex gap-y-10 rounded-lg items-stretch cursor-pointer hover:bg-green-50 transition-all">
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
          <h1 className="my-2 text-xl font-bold group-hover:text-green-600 transition-all">{courseName}</h1>
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
  );
};

export default UpdateSkillItem;
