import { useState } from "react";
import { useRouter } from "next/router";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [recaptchaChecked, setRecaptchaChecked] = useState(false);
  const router = useRouter();
  const handleLogin = async (e) => {
    e.preventDefault();
    // Handle login logic here
    const response = await fetch("http://localhost:3000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    const data = await response.json();
    localStorage.setItem("token", data.token);
    localStorage.setItem("role", data.role);
    router.push("/backoffice/dashboard");
    console.log({ email, password, recaptchaChecked });
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-200">
      <div className="bg-gray-100 p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-center text-xl font-semibold mb-6">
          LOG IN TO Access Admin Dashboard
        </h2>
        <form onSubmit={handleLogin} className="space-y-4">
          {/* Username */}
          <div>
            <label className="block text-sm font-medium">Username</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-3 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full p-3 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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

          {/* Sign In Button */}
          <button
            type="submit"
            className="w-full bg-gray-700 text-white py-3 rounded-md hover:bg-gray-900 transition"
          >
            Sign in
          </button>
        </form>

        {/* Links */}
        <div className="text-center mt-4 text-sm space-y-1">
          <a href="#" className="text-gray-600 hover:underline">
            Forgot Password? Click Here
          </a>
          <p>
            Don’t Have An Account?{" "}
            <a
              href="/backoffice/signup"
              className="text-gray-600 font-semibold hover:underline"
            >
              Sign up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
