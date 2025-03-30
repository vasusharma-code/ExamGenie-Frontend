import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import config from "../config"; // Import backend base URL

const UploadPYQs = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    const user_id = localStorage.getItem("user_id");
    if (!user_id) {
      alert("You must be logged in to upload.");
      return;
    }

    if (!file) {
      alert("Please select a file to upload.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);
    formData.append("type", "pyq");
    formData.append("user_id", user_id);

    try {
      const response = await fetch(`${config.backendBaseUrl}/api/upload`, {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      if (response.ok) {
        alert(data.message || "File uploaded successfully.");
        setFile(null); // Clear the file input
      } else {
        alert(data.error || "Failed to upload file.");
      }
    } catch (error) {
      console.error("Error uploading file:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div className="flex h-screen bg-gray-50 text-gray-800 mt-14">
      <Sidebar
        isOpen={isSidebarOpen}
        toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
      />
      <div className={`${isSidebarOpen ? "ml-64" : "ml-0"} flex flex-col flex-1`}>
        <Navbar isOpen={isSidebarOpen} />
        <main className="flex flex-col flex-1 p-4 sm:p-6 pt-20 overflow-auto">
          <div className="max-w-full sm:max-w-3xl mx-auto bg-white p-4 sm:p-6 rounded-lg shadow-md border">
            <h2 className="text-2xl font-semibold mb-4">Upload PYQs</h2>
            <input
              type="file"
              onChange={handleFileChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            />
            <button
              onClick={handleUpload}
              className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
            >
              Upload
            </button>
          </div>
        </main>
      </div>
    </div>
  );
};

export default UploadPYQs;