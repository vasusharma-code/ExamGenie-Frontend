import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

const UploadPYQs = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [files, setFiles] = useState([]);

  const handleUpload = (e) => {
    const uploadedFiles = Array.from(e.target.files);
    setFiles([...files, ...uploadedFiles.map((file) => file.name)]);
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

        <main className="flex flex-col flex-1 p-4 sm:p-6 pt-20 overflow-auto">
          {/* Upload Form */}
          <div className="max-w-full sm:max-w-3xl mx-auto bg-white p-4 sm:p-6 rounded-lg shadow-md border">
            <h2 className="text-2xl font-semibold mb-4">Upload PYQs</h2>
            <input
              type="file"
              multiple
              onChange={handleUpload}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            />
          </div>

          {/* Upload History */}
          <div className="max-w-full sm:max-w-3xl mx-auto mt-6">
            <h3 className="text-xl font-semibold mb-2">Upload History</h3>
            <div className="bg-white p-3 sm:p-4 rounded-lg shadow-md border">
              {files.length === 0 ? (
                <p className="text-gray-500">No files uploaded yet.</p>
              ) : (
                <ul className="divide-y divide-gray-200">
                  {files.map((file, index) => (
                    <li key={index} className="py-2">
                      {file}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default UploadPYQs;