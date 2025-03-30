import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Routes>
        {/* Login page at the root */}
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        {/* Home page with responsive Sidebar and messaging UI */}
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;