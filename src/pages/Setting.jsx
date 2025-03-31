import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

const Settings = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [aiTutorEnabled, setAiTutorEnabled] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState(true);
  const [preferredStyle, setPreferredStyle] = useState("visual");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Settings saved!");
  };

  return ( 
    <div className="flex h-screen bg-gray-50 text-gray-800 mt-14">
      <Sidebar
        isOpen={isSidebarOpen}
        toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
      />
      
      <div className={`${isSidebarOpen ? "ml-64" : "ml-0"} flex flex-col flex-1`}>
        <Navbar isOpen={isSidebarOpen} />
        <main className="flex flex-col flex-1 p-6 pt-20 overflow-auto">
          <h2 className="text-3xl font-semibold text-gray-800 mb-8">Settings</h2>
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="flex items-center justify-between">
              <label className="text-gray-700">Enable AI Tutor</label>
              <input
                type="checkbox"
                checked={aiTutorEnabled}
                onChange={() => setAiTutorEnabled(!aiTutorEnabled)}
                className="w-5 h-5 text-blue-600"
              />
            </div>
            <div className="flex items-center justify-between">
              <label className="text-gray-700">Dark Mode</label>
              <input
                type="checkbox"
                checked={darkMode}
                onChange={() => setDarkMode(!darkMode)}
                className="w-5 h-5 text-blue-600"
              />
            </div>
            <div className="flex items-center justify-between">
              <label className="text-gray-700">Email Notifications</label>
              <input
                type="checkbox"
                checked={notifications}
                onChange={() => setNotifications(!notifications)}
                className="w-5 h-5 text-blue-600"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">
                Preferred Learning Style
              </label>
              <select
                className="w-full p-3 border-b border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                value={preferredStyle}
                onChange={(e) => setPreferredStyle(e.target.value)}
              >
                <option value="visual">Visual</option>
                <option value="auditory">Auditory</option>
                <option value="kinesthetic">Kinesthetic</option>
              </select>
            </div>
            <button
              type="submit"
              className="w-full py-3 text-white bg-blue-600 hover:bg-blue-700 transition rounded"
            >
              Save Settings
            </button>
          </form>
        </main>
      </div>
    </div>
  );
};

export default Settings;