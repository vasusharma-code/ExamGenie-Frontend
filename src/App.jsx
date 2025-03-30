import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import UploadSyllabus from "./pages/UploadSyllabus";
import UploadPYQs from "./pages/UploadPYQs";
import Profile from "./pages/Profile";
import Settings from "./pages/Setting";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />} />
        <Route path="/upload-pyqs" element={<UploadPYQs />} />
      <Route path="/upload-syllabus" element={<UploadSyllabus />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </Router>
  );
}

export default App;