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
    <div className="border-[#133250] flex justify-center items-center h-screen animate-slide-in-up">
      <div className="w-10/12 max-w-md p-6 mt-16 rounded bg-white border border-[#133250]">
        <h2 className="text-3xl text-center md:text-5xl font-black text-[#133250] mb-8 tracking-tighter italic uppercase">
          Sign <span className="text-[#80B5D7]">In</span>
        </h2>

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
              className="w-full p-2 rounded border border-[#133250] focus:ring-2 focus:ring-blue-900 focus:outline-none"
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
              className="w-full p-2 rounded border border-[#133250] focus:ring-2 focus:ring-blue-900 focus:outline-none"
              placeholder="Enter your password"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#133250] text-white py-2 rounded hover:bg-blue-500 transition-colors"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
