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
      <div className="bg-gray-400 px-10 py-5 flex justify-between">
        {/* Left Section */}
        <div id="col-1">
          <div id="Logo&Company">
            <span className="text-lg font-semibold">AI Solution</span>
          </div>
          <p>AI Solution for a Smarter Future</p>
          <div className="flex gap-3 items-center">
            <CiMail />
            <span>theaisolutions@gmail.com</span>
          </div>
          <div className="flex gap-3 items-center">
            <FaPhoneAlt />
            <span>+959 250 183 073</span>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex gap-20">
          {/* About Us Links */}
          <div id="col-2">
            <p className="font-semibold">About Us</p>
            {aboutLinks.map((item, index) => (
              <p key={index}>
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
          <div id="col-3">
            <p className="font-semibold">Our Services</p>
            {serviceLinks.map((item, index) => (
              <p key={index}>
                <Link
                  href={item.link}
                  className="hover:text-blue-900 hover:underline"
                >
                  {item.name}
                </Link>
              </p>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="flex justify-between px-48 bg-gray-200 py-3">
        <p>© 2025 AI Solutions</p>
        <p>
          All kinds of solutions available for every business website design
        </p>
      </div>
    </>
  );
};

export default UserFooter;
