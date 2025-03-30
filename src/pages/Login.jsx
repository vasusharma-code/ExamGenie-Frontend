import { useState } from "react";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaGithub, FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  // Toggle Password Visibility
  const togglePassword = () => {
    setPasswordVisible(!passwordVisible);
  };

  // Email Validation
  const validateEmail = (e) => {
    const emailValue = e.target.value;
    setEmail(emailValue);

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailValue)) {
      setEmailError("Please enter a valid email address.");
    } else {
      setEmailError("");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-md">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
          Welcome Back
        </h2>

        {/* Social Login Buttons */}
        <div className="flex flex-col gap-3">
          <button className="flex items-center justify-center w-full p-3 border border-gray-300 rounded-md hover:bg-gray-200 transition">
            <FcGoogle className="text-xl mr-2" /> Continue with Google
          </button>
          <button className="flex items-center justify-center w-full p-3 border border-gray-300 rounded-md hover:bg-gray-200 transition">
            <FaGithub className="text-xl mr-2" /> Continue with GitHub
          </button>
        </div>

        <div className="flex items-center my-4">
          <hr className="flex-grow border-gray-300" />
          <span className="mx-2 text-gray-400">OR</span>
          <hr className="flex-grow border-gray-300" />
        </div>

        {/* Email Input */}
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={validateEmail}
          className={`w-full p-3 border rounded mb-2 focus:outline-none focus:ring-2 transition ${
            emailError ? "border-red-500 focus:ring-red-400" : "border-gray-300 focus:ring-blue-400"
          }`}
        />
        {emailError && <p className="text-red-500 text-sm mb-4">{emailError}</p>}

        {/* Password Input with Toggle */}
        <div className="relative">
          <input
            type={passwordVisible ? "text" : "password"}
            placeholder="Enter your password"
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          />
          <button
            type="button"
            onClick={togglePassword}
            className="absolute inset-y-0 right-3 flex items-center text-gray-600 hover:text-gray-800 transition"
          >
            {passwordVisible ? <FaEyeSlash /> : <FaEye />}
          </button>
        </div>

        <button className="w-full bg-blue-600 text-white p-3 rounded mt-6 hover:bg-blue-700 transition">
          Login
        </button>

        <p className="mt-6 text-center text-gray-600">
          New user?{" "}
          <Link to="/signup" className="text-blue-500 hover:underline">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
