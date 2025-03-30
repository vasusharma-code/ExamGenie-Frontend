import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

const Profile = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [fullName, setFullName] = useState("");
  const [university, setUniversity] = useState("");
  const [studentId, setStudentId] = useState("");
  const [major, setMajor] = useState("");
  const [photo, setPhoto] = useState(null);

  const handlePhotoChange = (e) => {
    setPhoto(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit profile details (logic placeholder)
    alert("Profile updated!");
  };

  return (
    <div className="flex h-screen bg-gray-50 text-gray-800 mt-14">
      {/* Sidebar */}
      <Sidebar
        isOpen={isSidebarOpen}
        toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
      />

      {/* Main Content Wrapper */}
      <div className={`${isSidebarOpen ? "ml-64" : "ml-0"} flex flex-col flex-1`}>
        <Navbar isOpen={isSidebarOpen} />
        <main className="flex flex-col flex-1 p-6 pt-20 overflow-auto mt-6
        ">
          <h2 className="text-3xl font-semibold text-gray-800 mb-8">Profile</h2>
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Photo and Name */}
            <div className="flex flex-col md:flex-row md:items-center md:space-x-8">
              <div className="flex flex-col">
                <label className="text-gray-700 mb-2">Profile Photo</label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handlePhotoChange}
                  className="p-2 border-b border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                />
                {photo && (
                  <div className="mt-3">
                    <img
                      src={URL.createObjectURL(photo)}
                      alt="Profile Preview"
                      className="w-24 h-24 object-cover rounded-full"
                    />
                  </div>
                )}
              </div>
              <div className="flex-1 mt-6 md:mt-0">
                <label className="block text-gray-700 mb-2">Full Name</label>
                <input
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="John Doe"
                  className="w-full p-3 border-b border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                />
              </div>
            </div>

            {/* Details Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <label className="block text-gray-700 mb-2">University</label>
                <input
                  type="text"
                  value={university}
                  onChange={(e) => setUniversity(e.target.value)}
                  placeholder="Your University"
                  className="w-full p-3 border-b border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Student ID</label>
                <input
                  type="text"
                  value={studentId}
                  onChange={(e) => setStudentId(e.target.value)}
                  placeholder="Your Student ID"
                  className="w-full p-3 border-b border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-gray-700 mb-2">Major / Course</label>
                <input
                  type="text"
                  value={major}
                  onChange={(e) => setMajor(e.target.value)}
                  placeholder="Your Major or Course"
                  className="w-full p-3 border-b border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3 text-white bg-blue-600 hover:bg-blue-700 transition rounded"
            >
              Save Profile
            </button>
          </form>
        </main>
      </div>
    </div>
  );
};

export default Profile;