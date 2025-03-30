import { useState } from "react";
import { IoShareOutline } from "react-icons/io5";

const Navbar = ({ isOpen }) => {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <nav
      className={`fixed top-0 left-0 h-16 flex justify-between items-center p-4 bg-white shadow-md border-b transition-all duration-300
      ${
        isOpen
          ? "ml-64 w-[calc(100%-16rem)]"
          : "ml-16 sm:ml-0 w-[calc(100%-4rem)] sm:w-full"
      }`}
    >
      {/* Navbar Title */}
      <h1 className="text-xl font-semibold text-gray-800 whitespace-nowrap">
        ExamGenie
      </h1>

      {/* Right Side (Share & Profile) */}
      <div className="flex items-center space-x-4">
        {/* Share Button */}
        <button className="text-gray-600 hover:text-gray-800 transition">
          <IoShareOutline size={22} />
        </button>

        {/* Profile Dropdown */}
        <div className="relative">
          <img
            src="https://via.placeholder.com/40"
            alt="Profile"
            className="w-10 h-10 rounded-full cursor-pointer"
            onClick={() => setShowDropdown(!showDropdown)}
          />
          {showDropdown && (
            <div className="absolute right-0 mt-2 w-48 bg-white shadow-md rounded-lg border z-50">
              <div className="p-3 text-gray-700">
                <p className="font-semibold">John Doe</p>
                <p className="text-sm text-gray-500">johndoe@example.com</p>
              </div>
              <button
                className="w-full text-left px-4 py-2 text-red-600 hover:bg-gray-100"
                onClick={() => alert("Logging out...")}
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
