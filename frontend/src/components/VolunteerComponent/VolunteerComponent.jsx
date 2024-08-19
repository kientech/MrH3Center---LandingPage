import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const VolunteerComponent = () => {
  const [course, setCourse] = useState(null);
  console.log("🚀 ~ VolunteerComponent ~ course:", course);

  useEffect(() => {
    fetchFreeCourse();
  }, []);

  const fetchFreeCourse = async () => {
    try {
      const response = await axios.get(
        "http://127.0.0.1:3000/api/courses"
      );
      if (response.data.length > 0) {
        setCourse(response.data.data[0]);
      }
    } catch (error) {
      console.error("Error fetching course data", error);
    }
  };
  return (
    <section id="home" className="md:h-[850px] h-[400px]">
      <div className="md:w-full md:h-[690px] relative">
        <img
          src={course?.image}
          className="w-full h-full object-cover rounded-lg"
          alt=""
        />

        <div className="md:w-[500px] md:h-[220px] w-[250px] h-[200px] bg-green-200/80 absolute right-0 -bottom-24 md:right-10 md:-bottom-24 z-50 rounded-lg p-4 shadow-md">
          <h1 className="font-bold my-2 text-green-900 text-xl">
            {course?.title}
          </h1>
          <p
            className="font-base overflow-hidden text-ellipsis"
            style={{
              display: "-webkit-box",
              WebkitBoxOrient: "vertical",
              WebkitLineClamp: 2,
              lineClamp: 2,
            }}
          >
            {course?.description}
          </p>
          <Link
            target="_blank"
            to={course?.targetUrl}
            className="font-bold px-4 py-2 rounded-lg bg-red-200 float-right mt-2"
          >
            Try it!
          </Link>
        </div>
      </div>
    </section>
  );
};

export default VolunteerComponent;
