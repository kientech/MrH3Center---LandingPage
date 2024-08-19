import React, { useState, useEffect } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import OurProjectItem from "./OurProjectItem";

const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
};

const OurProjectsTabs = () => {
  const [value, setValue] = useState(0);
  const [projects, setProjects] = useState([]);
  console.log("🚀 ~ OurProjectsTabs ~ projects:", projects)

  useEffect(() => {
    // Fetch projects from the database
    async function fetchProjects() {
      const response = await fetch("http://127.0.0.1:3000/api/projects/");
      const data = await response.json();
      setProjects(data.data);
    }

    fetchProjects();
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // Filter projects by category
  const filterProjects = (tag) => {
    return projects.filter((project) => project.tag === tag);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs value={value} onChange={handleChange} aria-label="tabs">
          <Tab label="All" />
          <Tab label="Web Development" />
          <Tab label="Mobile App" />
          <Tab label="Machine Learning" />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <div className="grid md:grid-cols-3 md:gap-8 grid-cols-1 gap-4">
          {projects.map((project) => (
            <OurProjectItem
              key={project._id}
              projectImage={project.image} // Replace with actual image URL
              projectTag={project.tag}
              projectName={project.name}
              author={project.author}
              technicalTools={project.technicalTools}
              description={project.description}

            />
          ))}
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <div className="grid md:grid-cols-3 md:gap-8 grid-cols-1 gap-4">
          {filterProjects("Web Development").map((project) => (
            <OurProjectItem
              key={project._id}
              projectImage={project.image} // Replace with actual image URL
              projectTag={project.tag}
              projectName={project.name}
              author={project.author}
              technicalTools={project.technicalTools}
              description={project.description}

            />
          ))}
        </div>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <div className="grid md:grid-cols-3 md:gap-8 grid-cols-1 gap-4">
          {filterProjects("Mobile App").map((project) => (
            <OurProjectItem
              key={project._id}
              projectImage={project.image} // Replace with actual image URL
              projectTag={project.tag}
              projectName={project.name}
              author={project.author}
              technicalTools={project.technicalTools}
              description={project.description}
            />
          ))}
        </div>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <div className="grid md:grid-cols-3 md:gap-8 grid-cols-1 gap-4">
          {filterProjects("Machine Learning").map((project) => (
            <OurProjectItem
              key={project._id}
              projectImage={project.image} // Replace with actual image URL
              projectTag={project.tag}
              projectName={project.name}
            />
          ))}
        </div>
      </TabPanel>
    </Box>
  );
};

export default OurProjectsTabs;
