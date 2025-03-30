import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

const Home = () => {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const handleSend = (e) => {
    e.preventDefault();
    if (message.trim() === "") return;
    setMessages([...messages, message]);
    setMessage("");
  };

  return (
    <div className="flex h-screen bg-gray-50 text-gray-800">
      {/* Sidebar */}
      <Sidebar
        isOpen={isSidebarOpen}
        toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
      />

      {/* Main Content Wrapper with conditional margin */}
      <div className={`${isSidebarOpen ? "ml-64" : "ml-0"} flex flex-col flex-1`}>
        {/* Navbar */}
        <Navbar isOpen={isSidebarOpen} />

        {/* Chat Section */}
        <main className="flex flex-col flex-1 items-center justify-between p-4 pt-20">
          <div className="flex-1 w-full max-w-3xl overflow-auto p-4 space-y-3">
            {messages.length === 0 ? (
              <p className="text-gray-600 text-center text-lg">
                Welcome to <span className="font-semibold">ExamGenie</span>! <br />
                <span className="text-gray-400">
                  Hi, how can I assist you today?
                </span>
              </p>
            ) : (
              messages.map((msg, index) => (
                <div
                  key={index}
                  className="bg-white border border-gray-300 p-3 rounded-lg w-fit max-w-2xl self-start"
                >
                  {msg}
                </div>
              ))
            )}
          </div>
          <form
            onSubmit={handleSend}
            className="w-full max-w-3xl flex items-center border border-gray-300 rounded-lg p-3 bg-white shadow-sm"
          >
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 bg-transparent text-gray-800 outline-none px-2 placeholder-gray-400"
            />
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500 transition"
            >
              Send
            </button>
          </form>
        </main>
      </div>
    </div>
  );
};

export default Home;