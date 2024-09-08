import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/HeaderComponent/Header";
import VolunteerComponent from "./components/VolunteerComponent/VolunteerComponent";
import CourseLevelComponent from "./components/CourseLevelComponent/CourseLevelComponent";
import AboutUsComponent from "./components/AboutUsComponent/AboutUsComponent";
import OurCourseComponent from "./components/OurCourseComponent/OurCourseComponent";
import SubcribeCompoonent from "./components/SubcribeComponent/SubcribeCompoonent";
import OurProjectsComponent from "./components/OurProjectsComponent/OurProjectsComponent";
import FeedbackComponent from "./components/FeedBackComponent/FeedbackComponent";
import UpdateSkillsComponent from "./components/UpdateSkillComponent/UpdateSkillsComponent";
import OurTeamComponent from "./components/OurTeamComponent/OurTeamComponent";
import FooterComponent from "./components/FooterComponent/FooterComponent";
import ContactFormComponent from "./components/ContactComponent/ContactFormComponent";

const App = () => {
  return (
    <div className="max-w-[90%] mx-auto">
      <Routes>
        {/* User-facing routes */}
        <Route
          path="/"
          element={
            <>
              <Header />
              <VolunteerComponent />
              <CourseLevelComponent />
              <AboutUsComponent />
              <OurCourseComponent />
              <SubcribeCompoonent />
              <OurProjectsComponent />
              <UpdateSkillsComponent />
              <FeedbackComponent />
              <OurTeamComponent />
              <ContactFormComponent />
              <FooterComponent />
            </>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
