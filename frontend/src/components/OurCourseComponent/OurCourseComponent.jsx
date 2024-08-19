import React, { useState, useEffect } from "react";
import LineStyle from "../common/LineStyle";
import CourseItem from "./CourseItem";
import axios from "axios";

const OurCourseComponent = () => {
  const [courses, setCourses] = useState([]);
  console.log("🚀 ~ OurCourseComponent ~ courses:", courses);

  useEffect(() => {
    // Fetching the courses from the API
    const fetchCourses = async () => {
      try {
        const response = await axios.get(
          "http://127.0.0.1:3000/api/courses"
        );
        setCourses(response.data.data);
      } catch (error) {
        console.error("Failed to fetch courses", error);
      }
    };

    fetchCourses();
  }, []);
  const approvedCourses = courses.filter(course => course.status === 'approved' && course.type === 'Fresher-Course');
  return (
    <section className="mt-24" id="courses">
      <div className="flex items-center justify-center">
        <LineStyle />
        <h1 className="px-2 font-base text-ordrfuit5ir5f>??ange-400">
          Our Courses
        </h1>
        <LineStyle />
      </div>
      <div>
        <h1 className="font-bold text-3xl text-green-600 my-2 text-center">
          Improving Everday, Reaching New Heights
        </h1>
      </div>

      <div className="grid md:grid-cols-3 md:gap-10 md:mt-10 grid-cols-1 gap-4">
        {approvedCourses.map((course) => (
          <CourseItem
            key={course.id}
            courseName={course.title}
            description={course.description}
            courseImage={course.image}
            tagName={course.tag}
            typeCourse={course.type}
            instructor={course.instructor}
          />
        ))}
      </div>
    </section>
  );
};

export default OurCourseComponent;
