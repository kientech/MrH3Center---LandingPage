import React, { useState, useEffect } from "react";
import axios from "axios";
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
    hover: (item) => {
      if (item.index !== index) {
        moveCourse(item.index, index);
        item.index = index;
      }
    },
  });

  return (
    <div ref={(node) => ref(drop(node))} className="course-item">
      <img src={course.img} alt={course.name} width="50" />
      <a href={course.link}>{course.name}</a>
      <p>Position: {course.position}</p>
    </div>
  );
};

const AdminRoadMap = () => {
  const [title, setTitle] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [courses, setCourses] = useState([]);
  const [newCourse, setNewCourse] = useState({ name: "", img: "", link: "" });
  const [roadmapId, setRoadmapId] = useState(null);

  useEffect(() => {
    if (roadmapId) {
      const fetchCourses = async () => {
        try {
          const response = await axios.get(
            `http://localhost:3000/api/roadmap/${roadmapId}`
          );
          setCourses(response.data.courses);
        } catch (error) {
          console.error("Error fetching courses:", error);
        }
      };
      fetchCourses();
    }
  }, [roadmapId]);

  const handleSubmitRoadmap = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/api/roadmap", {
        title,
      });
      setRoadmapId(response.data._id);
      setShowPopup(true);
    } catch (error) {
      console.error("Error creating roadmap:", error);
    }
  };

  const handleAddCourse = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `http://localhost:3000/api/roadmap/${roadmapId}/course`,
        newCourse
      );
      setCourses(response.data.courses);
      setNewCourse({ name: "", img: "", link: "" });
    } catch (error) {
      console.error("Error adding course:", error);
    }
  };

  const moveCourse = (fromIndex, toIndex) => {
    const updatedCourses = [...courses];
    const [movedCourse] = updatedCourses.splice(fromIndex, 1);

    movedCourse.position = toIndex;
    updatedCourses.splice(toIndex, 0, movedCourse);

    updatedCourses.forEach((course, index) => {
      course.position = index;
    });

    setCourses(updatedCourses);

    // Cập nhật vị trí khóa học trên server
    axios
      .put(`http://localhost:3000/api/roadmap/${roadmapId}/courses`, {
        courses: updatedCourses,
      })
      .catch((error) => console.error("Error updating roadmap:", error));
  };

  return (
    <div>
      <form onSubmit={handleSubmitRoadmap}>
        <label>
          Roadmap Title:
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
        <button type="submit">Create Roadmap</button>
      </form>

      {showPopup && (
        <div className="popup">
          <h2>Add Courses to Roadmap</h2>
          <form onSubmit={handleAddCourse}>
            <label>
              Course Name:
              <input
                type="text"
                value={newCourse.name}
                onChange={(e) =>
                  setNewCourse({ ...newCourse, name: e.target.value })
                }
                required
              />
            </label>
            <label>
              Course Image URL:
              <input
                type="text"
                value={newCourse.img}
                onChange={(e) =>
                  setNewCourse({ ...newCourse, img: e.target.value })
                }
                required
              />
            </label>
            <label>
              Course Link:
              <input
                type="text"
                value={newCourse.link}
                onChange={(e) =>
                  setNewCourse({ ...newCourse, link: e.target.value })
                }
                required
              />
            </label>
            <button type="submit">Add Course</button>
          </form>

          <DndProvider backend={HTML5Backend}>
            <div>
              {courses.map((course, index) => (
                <DraggableCourse
                  key={course._id}
                  course={course}
                  index={index}
                  moveCourse={moveCourse}
                />
              ))}
            </div>
          </DndProvider>
        </div>
      )}
    </div>
  );
};

export default AdminRoadMap;
