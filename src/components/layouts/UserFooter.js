import React from "react";
import Link from "next/link";
import { CiMail } from "react-icons/ci";
import { FaPhoneAlt } from "react-icons/fa";

const UserFooter = () => {
  const aboutLinks = [
    { name: "Who are we", link: "/user/about" },
    { name: "Our Services", link: "/user/services" },
    { name: "Portfolio", link: "/user/portfolio" },
    { name: "Contact Us", link: "/user/contact" },
    { name: "Sitemap", link: "/user/sitemap" },
  ];

  const serviceLinks = [
    { name: "Learning Management System", link: "/user/solutions/1" },
    { name: "Automated Grading Assistant", link: "/user/solutions/2" },
    { name: "Fraud Detection AI", link: "/user/solutions/3" },
    { name: "AI-Driven Investment Advisor", link: "/user/solutions/4" },
    { name: "AI-Powered Diagnostic Assistant", link: "/user/solutions/5" },
    { name: "Patient Flow Optimization", link: "/user/solutions/6" },
    { name: "Citizen Service Chatbot", link: "/user/solutions/7" },
    { name: "AI for Public Safety", link: "/user/solutions/8" },
  ];

  return (
    <>
      {/* Main Footer Section */}
      <div className="bg-customBlack px-6 py-5 flex flex-col md:flex-row justify-between text-white">
        {/* Left Section */}
        <div className="mb-6 md:mb-0">
          <div className="mb-4 flex items-center gap-3">
            <img src="/image18.png" className="w-10 rounded-sm" alt="Logo" />
            <span className="text-lg font-semibold">AI Solution</span>
          </div>
          <p className="mb-1">AI Solution for a Smarter Future</p>
          <div className="flex gap-3 items-center mb-1">
            <CiMail />
            <span>theaisolutions@gmail.com</span>
          </div>
          <div className="flex gap-3 items-center">
            <FaPhoneAlt />
            <span>+959 250 183 073</span>
          </div>
        </div>

        {/* Right Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-1">
          {/* About Us Links */}
          <div>
            <p className="font-semibold mb-2 text-xl">About Us</p>
            {aboutLinks.map((item, index) => (
              <p key={index} className="mb-1">
                <Link
                  href={item.link}
                  className="hover:text-blue-900 hover:underline"
                >
                  {item.name}
                </Link>
              </p>
            ))}
          </div>

          {/* Our Services Links */}
          <div>
            <p className="font-semibold mb-2 text-xl">Our Services</p>
            {serviceLinks.map((item, index) => (
              <p key={index} className="mb-1">
                {index === 0 ? (
                  <Link
                    href={item.link}
                    className="hover:text-blue-900 hover:underline"
                  >
                    {item.name}
                  </Link>
                ) : (
                  <span className="hover:text-blue-900 hover:underline cursor-pointer">
                    {item.name}
                  </span>
                )}
              </p>
            ))}
          </div>
        </div>
      </div>

      <hr className="border-gray-300 bg-customBlack" />

      {/* Footer Bottom Section */}
      <div className="flex flex-col md:flex-row justify-between px-6 md:px-20 bg-customBlack text-white py-3 text-center md:text-left">
        <p>© 2025 AI Solutions</p>
        <p>
          All kinds of solutions available for every business website design
        </p>
      </div>
    </>
  );
};

export default UserFooter;
