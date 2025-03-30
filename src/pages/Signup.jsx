import { useState } from "react";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaGithub, FaEye, FaEyeSlash } from "react-icons/fa";

const Signup = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  // Toggle Password Visibility
  const togglePassword = () => {
    setPasswordVisible(!passwordVisible);
  };

  const toggleConfirmPassword = () => {
    setConfirmPasswordVisible(!confirmPasswordVisible);
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

  // Check if Passwords Match
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
    if (password !== e.target.value) {
      setPasswordError("Passwords do not match!");
    } else {
      setPasswordError("");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-md">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
          Create an Account
        </h2>

        {/* Social Sign-Up Buttons */}
        <div className="flex flex-col gap-3">
          <button className="flex items-center justify-center w-full p-3 border border-gray-300 rounded-md hover:bg-gray-200 transition">
            <FcGoogle className="text-xl mr-2" /> Sign up with Google
          </button>
          <button className="flex items-center justify-center w-full p-3 border border-gray-300 rounded-md hover:bg-gray-200 transition">
            <FaGithub className="text-xl mr-2" /> Sign up with GitHub
          </button>
        </div>

        <div className="flex items-center my-4">
          <hr className="flex-grow border-gray-300" />
          <span className="mx-2 text-gray-400">OR</span>
          <hr className="flex-grow border-gray-300" />
        </div>

        {/* Signup Form */}
        <input
          type="text"
          placeholder="Full Name"
          className="w-full p-3 border border-gray-300 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
        />

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
            placeholder="Create a password"
            value={password}
            onChange={handlePasswordChange}
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

        {/* Confirm Password Input with Toggle */}
        <div className="relative mt-4">
          <input
            type={confirmPasswordVisible ? "text" : "password"}
            placeholder="Confirm password"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          />
          <button
            type="button"
            onClick={toggleConfirmPassword}
            className="absolute inset-y-0 right-3 flex items-center text-gray-600 hover:text-gray-800 transition"
          >
            {confirmPasswordVisible ? <FaEyeSlash /> : <FaEye />}
          </button>
        </div>

        {passwordError && <p className="text-red-500 text-sm mt-2">{passwordError}</p>}

        <button
          className="w-full bg-blue-600 text-white p-3 rounded mt-6 hover:bg-blue-700 transition"
          disabled={emailError || passwordError}
        >
          Sign Up
        </button>

        <p className="mt-6 text-center text-gray-600">
          Already have an account?{" "}
          <Link to="/" className="text-blue-500 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
