import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [confirmPassword, setConfirmPassword] = useState("");
  const [err, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const validateInputs = () => {
    if (!inputs.username.trim()) return "Username is required.";
    if (!inputs.email.trim() || !/\S+@\S+\.\S+/.test(inputs.email))
      return "A valid email is required.";
    if (inputs.password.length < 6)
      return "Password must be at least 6 characters long.";
    if (inputs.password !== confirmPassword) return "Passwords do not match.";
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationError = validateInputs();
    if (validationError) {
      setError(validationError);
      return;
    }

    setIsLoading(true);
    try {
      const res = await axios.post("/auth/register", inputs);
      setIsLoading(false);
      setInputs({ username: "", email: "", password: "" });
      setConfirmPassword("");
      navigate("/login");
    } catch (error) {
      setIsLoading(false);
      setError(
        error.response?.data?.message || "Failed to register, please try again."
      );
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#bce8ef] p-4">
      <div className="w-full max-w-4xl flex flex-col lg:flex-row bg-white rounded-xl shadow-lg">
        <div className="lg:w-1/2 flex items-center justify-center overflow-hidden rounded-t-xl lg:rounded-l-xl">
          <img
            src="/1.png"
            alt="Registration Illustration"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-full lg:w-1/2 p-6 sm:p-8 lg:p-10">
          <h1 className="text-2xl sm:text-3xl font-bold text-[#cbbce2] text-center mb-4">
            Create Account
          </h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Username"
              name="username"
              value={inputs.username}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-[#cbbce2] rounded-md focus:outline-none"
            />
            <input
              type="email"
              placeholder="E-mail"
              name="email"
              value={inputs.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-[#cbbce2] rounded-md focus:outline-none"
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={inputs.password}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-[#cbbce2] rounded-md focus:outline-none"
            />
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full px-3 py-2 border border-[#cbbce2] rounded-md focus:outline-none"
            />
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-[#cbbce2] text-white py-2 rounded-md hover:bg-[#bce8ef] transition duration-300"
            >
              {isLoading ? "Registering..." : "Register"}
            </button>
            {err && <p className="text-red-500 text-center mt-2">{err}</p>}
          </form>
          <p className="text-center mt-4">
            Already have an account?{" "}
            <Link to="/login" className="hover:underline">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
