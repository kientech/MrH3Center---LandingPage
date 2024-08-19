import React, { useState, useEffect } from "react";
import UpdateSkillItem from "./UpdateSkillItem";
import LineStyle from "../common/LineStyle";
import axios from "axios";

const UpdateSkillsComponent = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    // Fetching the courses from the API
    const fetchCourses = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:3000/api/courses");
        setCourses(response.data.data);
      } catch (error) {
        console.error("Failed to fetch courses", error);
      }
    };

    fetchCourses();
  }, []);

  // Filter courses with type 'skill course'
  const skillCourses = courses.filter(course => course.type === 'Skill-Course' && course.status === 'approved');

  console.log("🚀 ~ UpdateSkillsComponent ~ skillCourses:", skillCourses)

  return (
    <div className="mt-24">
      <div className="flex items-center justify-center">
        <LineStyle />
        <h1 className="px-2 font-base text-orange-400">Update Skills</h1>
        <LineStyle />
      </div>
      <div className="mb-4">
        <h1 className="font-bold text-3xl text-green-600 my-2 text-center">
          Elevate your Skills, Expand your Opportunities!
        </h1>
      </div>
      <div className="grid md:grid-cols-2 grid-cols-1 md:gap-10 gap-10 mt-10">
        {skillCourses.map((course) => (
          <UpdateSkillItem
            key={course._id}
            image={course.image}
            courseTag={course.tag}
            courseName={course.title}
            durations={course.duration}
            lessons={course.lesson}
            instructor={course.instructor}
            price={course.money}
          />
        ))}
      </div>
    </div>
  );
};

export default UpdateSkillsComponent;
