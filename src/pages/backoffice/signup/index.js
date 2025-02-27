"use client";
import { useState } from "react";

const AdminSignup = () => {
  const [recaptchaChecked, setRecaptchaChecked] = useState(false);

  const handleSignup = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const email = formData.get("email");
    const password = formData.get("password");
    const confirmPassword = formData.get("confirmPassword");

    console.log({ email, password, confirmPassword, recaptchaChecked });
    // Handle sign-up logic here
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-200">
      <div className="bg-gray-100 p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-center text-xl font-semibold mb-6">
          Sign Up TO Access Admin Dashboard
        </h2>
        <form onSubmit={handleSignup} className="space-y-4">
          {/* Username */}
          <div>
            <label className="block text-sm font-medium">Username</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="w-full p-3 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              className="w-full p-3 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
              required
            />
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-sm font-medium">
              Confirm Password
            </label>
            <input
              type="password"
              name="confirmPassword"
              placeholder="Re-enter your password"
              className="w-full p-3 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
              required
            />
          </div>

          {/* ReCaptcha */}
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="recaptcha"
              className="w-4 h-4"
              checked={recaptchaChecked}
              onChange={() => setRecaptchaChecked(!recaptchaChecked)}
            />
            <label htmlFor="recaptcha" className="text-sm">
              ReCaptcha
            </label>
          </div>

          {/* Sign Up Button */}
          <button
            type="submit"
            className="w-full bg-gray-700 text-white py-3 rounded-md hover:bg-gray-900 transition"
          >
            Sign up
          </button>
        </form>

        {/* Links */}
        <div className="text-center mt-4 text-sm">
          <p>
            Already have an account?{" "}
            <a
              href="/backoffice/login"
              className="text-gray-600 font-semibold hover:underline"
            >
              Log in
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdminSignup;
