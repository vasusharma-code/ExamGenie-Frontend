import { useState } from 'react';
import config from '../config'; // Import backend base URL

function Chatbot() {
  const [message, setMessage] = useState('');
  const [responses, setResponses] = useState([]);

  const handleSend = async () => {
    const user_id = localStorage.getItem('user_id');
    if (!user_id) {
      alert('You must be logged in to chat.');
      return;
    }

    const response = await fetch(`${config.backendBaseUrl}/api/chat`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message, user_id }), // Send user_id in the body
    });
    const data = await response.json();
    if (response.ok) {
      setResponses((prev) => [...prev, { user: message, bot: data.reply }]);
      setMessage('');
    } else {
      alert(data.error || 'Failed to send message');
    }
  };

  return (
    <div>
      <h1>AI Chatbot</h1>
      <div>
        {responses.map((res, index) => (
          <div key={index}>
            <p><strong>You:</strong> {res.user}</p>
            <p><strong>Bot:</strong> {res.bot}</p>
          </div>
        ))}
      </div>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type your message"
      />
      <button onClick={handleSend}>Send</button>
    </div>
  );
}

export default Chatbot;