import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {
  const navigate = useNavigate();
  const { logout } = useAuth();
  const handleLogout = () => {
    localStorage.removeItem("username");
    logout();
    navigate("/login");
  };

  const navigations = [
    {
      id: 1,
      to: "/admin/create-course",
      name: "New Course",
    },
    {
      id: 2,
      to: "/admin/create-project",
      name: "New Project",
    },
    {
      id: 3,
      to: "/admin/add-member",
      name: "Add Member",
    },
    {
      id: 6,
      to: "/admin/add-feedback",
      name: "Add Feedback",
    },
    {
      id: 4,
      to: "manage-courses",
      name: "Manage Courses",
    },
    {
      id: 5,
      to: "manage-members",
      name: "All Members",
    },
    {
      id: 7,
      to: "manage-feedbacks",
      name: "All Feedbacks",
    },
    {
      id: 8,
      to: "manage-contacts",
      name: "All Contacts",
    },
    {
      id: 9,
      to: "manage-subscribes",
      name: "All Subscribers",
    },
    {
      id: 10,
      to: "roadmap",
      name: "RoadMap",
    },
  ];
  return (
    <div className="max-w-[95%] py-4 mx-auto shadow-lg admin-dashboard rounded-lg">
      <div className="sidebar">
        <div className="flex items-center justify-between px-4 py-4 border-b-[1px] border-gray-200">
          <div className="flex items-center">
            <img
              src="https://cdn.dribbble.com/users/883236/screenshots/10741668/media/624ccf1b31e556f06e82ade5da5368a7.png?resize=640x480&vertical=center"
              alt=""
              className="w-12 h-12 object-cover rounded-full"
            />
            <h1 className="text-2xl font-bold ml-4">Admin Panel</h1>
          </div>
          <div>
            <img
              src="https://cdn.dribbble.com/userupload/15921582/file/original-bbe7c8ae01fc80e4301ab2a5007d1d83.png?resize=640x480&vertical=center"
              alt=""
              className="w-12 h-12 object-cover rounded-full"
            />
            <button onClick={handleLogout}>Sign out</button>
          </div>
        </div>
        <div className="flex gap-x-10">
          <div className="w-[30%] p-10 border-r-2 border-gray-200 flex flex-col gap-y-2">
            {navigations &&
              navigations.map((item) => (
                <>
                  <NavLink
                    to={item.to}
                    key={item.id}
                    className={({ isActive }) =>
                      isActive
                        ? "sidebar-link py-2 px-8 rounded-lg font-semibold bg-green-100 text-green-700 text-lg"
                        : "sidebar-link py-2 px-8 rounded-lg hover:bg-green-50 text-lg"
                    }
                  >
                    {item.name}
                  </NavLink>
                </>
              ))}
          </div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
