import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [err, setError] = useState(null);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Make an API call to your backend
      const res = await axios.post(
        "http://localhost:8800/auth/register",
        inputs
      );
      console.log("Registration successful:", res.data);
      navigate("/login"); // Redirect to the login page on success
    } catch (error) {
      console.error("Registration failed:", error);
      setError(
        error.response?.data?.message || "Failed to register, please try again."
      );
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#bce8ef] p-4">
      <div className="w-full max-w-4xl flex flex-col lg:flex-row bg-white rounded-xl shadow-lg">
        {/* Left side with image */}
        <div
          className="
         lg:block lg:w-1/2 flex items-center justify-center rounded-t-xl lg:rounded-l-xl lg:rounded-tr-none overflow-hidden"
        >
          <img
            src="/1.png"
            alt="Registration Illustration"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right side with register form */}
        <div className="w-full lg:w-1/2 p-6 sm:p-8 lg:p-10">
          <h1 className="text-2xl sm:text-3xl font-bold text-[#cbbce2] text-center mb-3 sm:mb-4">
            Create Account
          </h1>
          <p className="text-[#cbbce2] text-sm sm:text-base text-center mb-6 sm:mb-8">
            Sign up to get started
          </p>
          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
            <div>
              <input
                type="text"
                placeholder="Username"
                name="username"
                value={inputs.username}
                onChange={handleChange}
                className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-[#cbbce2] rounded-md focus:outline-none focus:ring-2 focus:ring-[#cbbce2] text-sm sm:text-base"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="E-mail"
                name="email"
                value={inputs.email}
                onChange={handleChange}
                className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-[#cbbce2] rounded-md focus:outline-none focus:ring-2 focus:ring-[#cbbce2] text-sm sm:text-base"
              />
            </div>
            <div>
              <input
                type="password"
                placeholder="Password"
                name="password"
                value={inputs.password}
                onChange={handleChange}
                className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-[#cbbce2] rounded-md focus:outline-none focus:ring-2 focus:ring-[#cbbce2] text-sm sm:text-base"
              />
            </div>
            <div className="flex items-center justify-between">
              <label className="flex items-center text-[#cbbce2]">
                <input
                  type="checkbox"
                  className="form-checkbox text-[#cbbce2] h-4 w-4"
                />
                <span className="ml-2 text-[#cbbce2] text-xs sm:text-sm">
                  I agree to the terms and conditions
                </span>
              </label>
            </div>
            <button
              type="submit"
              className="w-full bg-[#cbbce2] text-white py-2 sm:py-3 rounded-md hover:bg-[#bce8ef] transition duration-300 text-sm sm:text-base"
            >
              Register
            </button>
            {err && (
              <p className="text-red-500 text-center text-xs sm:text-sm mt-2">
                {err}
              </p>
            )}
          </form>
          <p className="text-center text-[#cbbce2] text-xs sm:text-sm mt-4">
            Already have an account?{" "}
            <Link to="/login" className="text-[#cbbce2] hover:underline">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
