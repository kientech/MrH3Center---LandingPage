import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/HeaderComponent/Header";
import VolunteerComponent from "./components/VolunteerComponent/VolunteerComponent";
import CourseLevelComponent from "./components/CourseLevelComponent/CourseLevelComponent";
import AboutUsComponent from "./components/AboutUsComponent/AboutUsComponent";
import StatisticComponent from "./components/StatisticComponent/StatisticComponent";
import OurCourseComponent from "./components/OurCourseComponent/OurCourseComponent";
import SubcribeCompoonent from "./components/SubcribeComponent/SubcribeCompoonent";
import OurProjectsComponent from "./components/OurProjectsComponent/OurProjectsComponent";
import FeedbackComponent from "./components/FeedBackComponent/FeedbackComponent";
import UpdateSkillsComponent from "./components/UpdateSkillComponent/UpdateSkillsComponent";
import OurTeamComponent from "./components/OurTeamComponent/OurTeamComponent";
import FooterComponent from "./components/FooterComponent/FooterComponent";
import AdminCreateNewCourse from "./components/AdminDashboard/AdminCreateNewCourse";
import AdminDashboard from "./components/AdminDashboard/AdminDashboard";
import AdminManageCourses from "./components/AdminDashboard/AdminManageCourses";
import AdminEditCourse from "./components/AdminDashboard/AdminEditCourse";
import AdminCreateNewProject from "./components/AdminDashboard/AdminCreateNewProject";
import AdminAddMember from "./components/AdminDashboard/AdminAddMember";
import AdminManageMembers from "./components/AdminDashboard/AdminManageMembers";
import AdminEditMember from "./components/AdminDashboard/AdminEditMember";
import AdminAddFeedback from "./components/AdminDashboard/AdminAddFeedback";
import AdminManageFeedback from "./components/AdminDashboard/AdminManageFeedback";
import ContactFormComponent from "./components/ContactComponent/ContactFormComponent";
import AdminContactManage from "./components/AdminDashboard/AdminContactManage";
import LoginComponent from "./components/Authentication/LoginComponent";
import ProtectedRoute from "./components/context/ProtectedRoute";
import AdminManageSubscribes from "./components/AdminDashboard/AdminManageSubscribes";
import AdminRoadMap from "./components/AdminDashboard/AdminRoadMap";
import AdminManageRoadmap from "./components/AdminDashboard/AdminManageRoadmap";

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
              <StatisticComponent />
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
        <Route path="/login" element={<LoginComponent />} />

        {/* Admin routes */}
        <Route
          path="/admin/*"
          element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          }
        >
          <Route path="create-course" element={<AdminCreateNewCourse />} />
          <Route path="create-project" element={<AdminCreateNewProject />} />
          <Route path="add-member" element={<AdminAddMember />} />
          <Route path="roadmap" element={<AdminRoadMap />} />
          <Route path="roadmap/:id" element={<AdminManageRoadmap />} />
          <Route path="manage-courses" element={<AdminManageCourses />} />
          <Route path="manage-members" element={<AdminManageMembers />} />
          <Route path="manage-feedbacks" element={<AdminManageFeedback />} />
          <Route path="manage-contacts" element={<AdminContactManage />} />
          <Route path="manage-subscribes" element={<AdminManageSubscribes />} />
          <Route path="add-feedback" element={<AdminAddFeedback />} />
          <Route path="edit-course/:id" element={<AdminEditCourse />} />
          <Route path="edit-member/:id" element={<AdminEditMember />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
