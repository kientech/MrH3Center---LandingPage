import React from "react";
import { motion } from "framer-motion";
import CourseLevelItem from "./CourseLevelItem";

const CourseLevelComponent = () => {
  const dataLevel = [
    {
      id: 1,
      nameCourse: "Intermediate",
      descriptionCourse:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet aliquam esse, nam ducimus unde quis repellat sit commodi sed quam, laborum odio ea deleniti eos velit blanditiis quia quibusdam maxime.",
    },
    {
      id: 2,
      nameCourse: "Expert",
      descriptionCourse:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet aliquam esse, nam ducimus unde quis repellat sit commodi sed quam, laborum odio ea deleniti eos velit blanditiis quia quibusdam maxime.",
    },
  ];
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      variants={containerVariants}
      transition={{ duration: 1 }}
      viewport={{ once: true, amount: 0.1 }}
      className="w-full my-8 grid md:grid-cols-2 md:gap-10 grid-cols-1 gap-4"
    >
      {dataLevel.map((item, index) => (
        <CourseLevelItem
          key={item.id}
          nameCourse={item.nameCourse}
          descriptionCourse={item.descriptionCourse}
        />
      ))}
    </motion.div>
  );
};

export default CourseLevelComponent;
