import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [registerData, setRegisterData] = useState({
    email: "",
    username: "",
    password: "",
  });
  const [message, setMessage] = useState("");

  const navigate = useNavigate()

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3001/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(loginData),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage("Login successful!");
        navigate('/')
        console.log("User logged in:", data);
      } else {
        setMessage(data.message || "Login failed!");
      }
    } catch (error) {
      console.error("Error during login:", error);
      setMessage("An error occurred. Please try again.");
    }
  };

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3001/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(registerData),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage("Registration successful!");
        console.log("User registered:", data);
      } else {
        setMessage(data.message || "Registration failed!");
      }
    } catch (error) {
      console.error("Error during registration:", error);
      setMessage("An error occurred. Please try again.");
    }
  };

  const handleInputChange = (e, type) => {
    const { id, value } = e.target;
    if (type === "login") {
      setLoginData({ ...loginData, [id]: value });
    } else {
      setRegisterData({ ...registerData, [id]: value });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex justify-center gap-40 flex-wrap">
          {/* Login Section */}
          <div className="bg-white p-6 shadow-md rounded-md w-full sm:w-1/2 lg:w-1/3">
            <h2 className="text-2xl text-center mb-4">Login</h2>
            <form onSubmit={handleLoginSubmit}>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Username or email address <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="email"
                  placeholder="Enter your email"
                  value={loginData.email}
                  onChange={(e) => handleInputChange(e, "login")}
                  className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-brown-500 outline-none"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="password"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Password <span className="text-red-500">*</span>
                </label>
                <input
                  type="password"
                  id="password"
                  placeholder="Enter your password"
                  value={loginData.password}
                  onChange={(e) => handleInputChange(e, "login")}
                  className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-brown-500 outline-none"
                />
              </div>
              <button
                type="submit"
                className="px-10 py-2 w-full rounded-tl-3xl rounded-br-3xl rounded-tr-sm rounded-bl-sm hover:rounded-lg bg-gradient-to-r from-brown-500 to-black text-white text-lg font-semibold shadow-lg hover:opacity-90 hover:shadow-xl transition-all"
              >
                Login
              </button>
            </form>
          </div>

          {/* Register Section */}
          <div className="bg-white p-6 shadow-md rounded-md w-full sm:w-1/2 lg:w-1/3">
            <h2 className="text-2xl text-center mb-4">Register</h2>
            <form onSubmit={handleRegisterSubmit}>
              <div className="mb-4">
                <label
                  htmlFor="register-email"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Email address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  value={registerData.email}
                  onChange={(e) => handleInputChange(e, "register")}
                  className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-brown-500 outline-none"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="username"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Username <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="username"
                  placeholder="Enter your username"
                  value={registerData.username}
                  onChange={(e) => handleInputChange(e, "register")}
                  className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-brown-500 outline-none"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="password"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Password <span className="text-red-500">*</span>
                </label>
                <input
                  type="password"
                  id="password"
                  placeholder="Enter your password"
                  value={registerData.password}
                  onChange={(e) => handleInputChange(e, "register")}
                  className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-brown-500 outline-none"
                />
              </div>
              <button
                type="submit"
                className="px-10 py-2 w-full rounded-tl-3xl rounded-br-3xl rounded-tr-sm rounded-bl-sm hover:rounded-lg bg-gradient-to-r from-brown-500 to-black text-white text-lg font-semibold shadow-lg hover:opacity-90 hover:shadow-xl transition-all"
              >
                Register
              </button>
            </form>
          </div>
        </div>
        {message && (
          <div className="text-center mt-4 text-green-800 font-medium">{message}</div>
        )}
      </div>
    </div>
  );
}

export default Login;
