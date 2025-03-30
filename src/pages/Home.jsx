import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import config from "../config"; // Import backend base URL

const Home = () => {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const handleSend = async (e) => {
    e.preventDefault();
    if (message.trim() === "") return;

    const user_id = localStorage.getItem("user_id");
    if (!user_id) {
      alert("You must be logged in to chat.");
      return;
    }

    try {
      const response = await fetch(`${config.backendBaseUrl}/api/chat`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message, user_id }), // Send user_id in the body
      });
      const data = await response.json();
      if (response.ok) {
        setMessages([...messages, { user: message, bot: data.reply }]);
        setMessage("");
      } else {
        alert(data.error || "Failed to send message");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div className="flex h-screen bg-gray-50 text-gray-800">
      <Sidebar
        isOpen={isSidebarOpen}
        toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
      />
      <div className={`${isSidebarOpen ? "ml-64" : "ml-0"} flex flex-col flex-1`}>
        <Navbar isOpen={isSidebarOpen} />
        <main className="flex flex-col flex-1 items-center justify-between p-4 pt-20">
          <div className="flex-1 w-full max-w-3xl overflow-auto p-4 space-y-3">
            {messages.map((msg, index) => (
              <div key={index} className="bg-white border p-3 rounded-lg">
                <p><strong>You:</strong> {msg.user}</p>
                <p><strong>Bot:</strong> {msg.bot}</p>
              </div>
            ))}
          </div>
          <form onSubmit={handleSend} className="w-full max-w-3xl flex items-center">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 p-3 border rounded"
            />
            <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
              Send
            </button>
          </form>
        </main>
      </div>
    </div>
  );
};

export default Home;