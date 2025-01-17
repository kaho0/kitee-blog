import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [inputs, setInputs] = useState({
    username: "",
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
      navigate("/");
    } catch (err) {
      setError("Failed to login, please try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#e4e2dd]">
      <div className="w-full max-w-4xl flex bg-white rounded-xl shadow-lg overflow-hidden">
        {/* Left side with video */}
        <div className="hidden lg:block w-1/2 flex-shrink-0 items-center justify-center rounded-l-xl">
          <video
            autoPlay
            loop
            muted
            className="w-full h-full object-cover rounded-l-xl"
          >
            <source src="/v.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Right side with login form */}
        <div className="w-full lg:w-1/2 p-10 flex-shrink-0">
          <h1 className="text-3xl font-bold text-gray-900 text-center mb-4">
            Welcome!
          </h1>
          <p className="text-gray-500 text-center mb-8">Sign in to continue</p>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <input
                type="text"
                placeholder="E-mail"
                name="username"
                value={inputs.username}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
              />
            </div>
            <div>
              <input
                type="password"
                placeholder="Password"
                name="password"
                value={inputs.password}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
              />
            </div>
            <div className="flex items-center justify-between">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="form-checkbox text-gray-500"
                />
                <span className="ml-2 text-gray-500 text-sm">Remember me</span>
              </label>
              <Link
                to="/forgot-password"
                className="text-sm text-gray-500 hover:underline"
              >
                Forgot password?
              </Link>
            </div>
            <button
              type="submit"
              className="w-full bg-gray-800 text-white py-3 rounded-md hover:bg-gray-700 transition duration-300"
            >
              Login
            </button>
            {err && (
              <p className="text-red-500 text-center text-sm mt-2">{err}</p>
            )}
          </form>
          <p className="text-center text-gray-500 text-sm mt-4">
            Don't have an account?{" "}
            <Link to="/register" className="text-gray-800 hover:underline">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
