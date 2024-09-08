import React from "react";
import LineStyle from "../common/LineStyle";
import CourseItem from "./CourseItem";
import { courses } from "../../database/courses";

const OurCourseComponent = () => {
  console.log(courses);
  const approvedCourses = courses.filter(
    (course) => course.status === "approved" && course.type === "Fresher-Course"
  );
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
