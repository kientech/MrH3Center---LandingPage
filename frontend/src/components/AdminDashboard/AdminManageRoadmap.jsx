import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

const ItemType = "COURSE";

const DraggableCourse = ({ course, index, moveCourse }) => {
  const [, ref] = useDrag({
    type: ItemType,
    item: { index },
  });

  const [, drop] = useDrop({
    accept: ItemType,
    hover(item) {
      if (item.index !== index) {
        moveCourse(item.index, index);
        item.index = index;
      }
    },
  });

  return (
    <div ref={(node) => ref(drop(node))} className="course-item">
      <img src={course.img} alt={course.name} width="50" />
      <div>{course.name}</div>
    </div>
  );
};

const AdminManageRoadmap = () => {
  const { id } = useParams();
  const [roadmap, setRoadmap] = useState(null);
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchRoadmap = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/api/roadmap/${id}`
        );
        setRoadmap(response.data);
        setCourses(response.data.courses);
      } catch (error) {
        console.error("Error fetching roadmap:", error);
      }
    };

    fetchRoadmap();
  }, [id]);

  const moveCourse = (fromIndex, toIndex) => {
    const updatedCourses = [...courses];
    const [movedCourse] = updatedCourses.splice(fromIndex, 1);
    updatedCourses.splice(toIndex, 0, movedCourse);
    setCourses(updatedCourses);
    axios.put(`http://localhost:3000/api/roadmap/${id}/courses`, {
      courses: updatedCourses,
    });
  };

  if (!roadmap) return <div>Loading...</div>;

  return (
    <DndProvider backend={HTML5Backend}>
      <h1>{roadmap.title}</h1>
      <div className="course-list">
        {courses.map((course, index) => (
          <DraggableCourse
            key={index}
            index={index}
            course={course}
            moveCourse={moveCourse}
          />
        ))}
      </div>
    </DndProvider>
  );
};

export default AdminManageRoadmap;
