import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignIn = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Both fields are required.");
      return;
    }

    console.log("Email:", email);
    console.log("Password:", password);
    setError("");
    navigate("/");
  };

  return (
    <div className="flex justify-center items-center h-screen animate-slide-in-up">
      <div className="w-11/12 max-w-md p-6 rounded border border-yellow-900">
        <h1 className="text-yellow-700 text-4xl font-bold mb-6 text-center">
          Sign In
        </h1>

        {error && (
          <p className="text-red-500 text-sm text-center mb-4">{error}</p>
        )}

        <form onSubmit={handleSignIn} className="space-y-4">
          <div>
            <label htmlFor="email" className="text-gray-800 block mb-2 text-sm">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 rounded border border-yellow-900 focus:ring-2 focus:ring-blue-900 focus:outline-none"
              placeholder="Enter your email"
              required
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="text-gray-800 block mb-2 text-sm"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 rounded border border-yellow-900 focus:ring-2 focus:ring-blue-900 focus:outline-none"
              placeholder="Enter your password"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-yellow-400 text-white py-2 rounded hover:bg-blue-950 transition-colors"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
