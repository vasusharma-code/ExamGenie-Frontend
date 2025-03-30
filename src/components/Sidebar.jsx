import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  // Helper function closes sidebar on nav click if it's open
  const handleNavClick = () => {
    if (isOpen) toggleSidebar();
  };

  return (
    <>
      {/* Sidebar Toggle Button - Always Visible */}
      <button
        className="fixed top-4 left-4 z-50 focus:outline-none"
        onClick={toggleSidebar}
      >
        {isOpen ? <X size={24} color="white" /> : <Menu size={24} />}
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full bg-blue-600 text-white border-r transition-all duration-300 z-40 ${
          isOpen ? "w-64" : "w-0 overflow-hidden"
        }`}
      >
        {/* Navigation Links - Hidden When Sidebar is Closed */}
        {isOpen && (
          <nav className="mt-12">
            <ul className="space-y-2">
              <li>
                <NavLink
                  to="/home"
                  onClick={handleNavClick}
                  className={({ isActive }) =>
                    `flex items-center p-3 rounded-lg transition duration-200 ${
                      isActive ? "bg-blue-500" : "hover:bg-blue-700"
                    }`
                  }
                >
                   Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/upload-pyqs"
                  onClick={handleNavClick}
                  className={({ isActive }) =>
                    `flex items-center p-3 rounded-lg transition duration-200 ${
                      isActive ? "bg-blue-500" : "hover:bg-blue-700"
                    }`
                  }
                >
                   Upload PYQs
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/upload-syllabus"
                  onClick={handleNavClick}
                  className={({ isActive }) =>
                    `flex items-center p-3 rounded-lg transition duration-200 ${
                      isActive ? "bg-blue-500" : "hover:bg-blue-700"
                    }`
                  }
                >
                   Upload Syllabus
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/profile"
                  onClick={handleNavClick}
                  className={({ isActive }) =>
                    `flex items-center p-3 rounded-lg transition duration-200 ${
                      isActive ? "bg-blue-500" : "hover:bg-blue-700"
                    }`
                  }
                >
                   Profile
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/settings"
                  onClick={handleNavClick}
                  className={({ isActive }) =>
                    `flex items-center p-3 rounded-lg transition duration-200 ${
                      isActive ? "bg-blue-500" : "hover:bg-blue-700"
                    }`
                  }
                >
                   Settings
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/logout"
                  onClick={handleNavClick}
                  className={({ isActive }) =>
                    `flex items-center p-3 rounded-lg transition duration-200 ${
                      isActive ? "bg-red-500" : "hover:bg-red-400"
                    }`
                  }
                >
                   Logout
                </NavLink>
              </li>
            </ul>
          </nav>
        )}
      </aside>
    </>
  );
};

export default Sidebar;
