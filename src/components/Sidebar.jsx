import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <aside
      className={`fixed top-0 left-0 h-full bg-blue-600 text-white border-r transition-all duration-300 z-50 ${
        isOpen ? "w-64" : "w-16"
      }`}
    >
      {/* Sidebar Toggle Button */}
      <div className="p-4 flex items-center justify-between">
        <button className="text-white focus:outline-none" onClick={toggleSidebar}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Navigation Links */}
      <nav className="mt-4">
        <ul className="space-y-2">
          <li>
            <NavLink
              to="/home"
              className={({ isActive }) =>
                `flex items-center p-3 rounded-lg transition duration-200 ${
                  isActive ? "bg-blue-500" : "hover:bg-blue-700"
                }`
              }
            >
              🏠 {isOpen && "Home"}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/profile"
              className={({ isActive }) =>
                `flex items-center p-3 rounded-lg transition duration-200 ${
                  isActive ? "bg-blue-500" : "hover:bg-blue-700"
                }`
              }
            >
              👤 {isOpen && "Profile"}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/settings"
              className={({ isActive }) =>
                `flex items-center p-3 rounded-lg transition duration-200 ${
                  isActive ? "bg-blue-700" : "hover:bg-blue-700"
                }`
              }
            >
              ⚙️ {isOpen && "Settings"}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/logout"
              className={({ isActive }) =>
                `flex items-center p-3 rounded-lg transition duration-200 ${
                  isActive ? "bg-red-500" : "hover:bg-red-400"
                }`
              }
            >
              🚪 {isOpen && "Logout"}
            </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
