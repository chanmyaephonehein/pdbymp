import React from "react";
import Link from "next/link";
import { CiMail } from "react-icons/ci";
import { FaPhoneAlt } from "react-icons/fa";

const UserFooter = () => {
  const aboutLinks = [
    { name: "Who are we", link: "/about" },
    { name: "Our Services", link: "/services" },
    { name: "Portfolio", link: "/portfolio" },
    { name: "Contact Us", link: "/contact" },
    { name: "Sitemap", link: "/sitemap" },
  ];

  const serviceLinks = [
    { name: "Learning Management System", link: "/services/lms" },
    { name: "Automated Grading Assistant", link: "/services/grading" },
    { name: "Fraud Detection AI", link: "/services/fraud" },
    { name: "AI-Driven Investment Advisor", link: "/services/investment" },
    { name: "AI-Powered Diagnostic Assistant", link: "/services/diagnostic" },
    { name: "Patient Flow Optimization", link: "/services/patient-flow" },
    { name: "Citizen Service Chatbot", link: "/services/chatbot" },
    { name: "AI for Public Safety", link: "/services/safety" },
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
