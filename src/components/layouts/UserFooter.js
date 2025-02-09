import React from "react";
import { CiMail } from "react-icons/ci";
import { FaPhoneAlt } from "react-icons/fa";

const UserFooter = () => {
  return (
    <>
      <div className="bg-gray-400 px-10 py-5 flex justify-between">
        <div id="col-1">
          <div id="Logo&Company">
            <span>AI Solution</span>
          </div>
          <p>AI Solution for a Smarter Future</p>
          <div className="flex gap-3 items-center">
            <span>
              <CiMail />
            </span>
            <span>theaisolutions@gmail.com</span>
          </div>
          <div className="flex gap-3 items-center">
            <FaPhoneAlt />
            <span>+959 250 183 073</span>
          </div>
        </div>
        <div className="flex gap-20">
          <div id="col-2">
            <p className="font-semibold">About Us </p>
            <p>Who are we</p>
            <p>Out Services</p>
            <p>Portfolio</p>
            <p>Contact Us</p>
            <p>Sitemap</p>
          </div>

          <div id="col-3">
            <p className="font-semibold">Our Services </p>
            <p>Learning Management System</p>
            <p>Automated Grading Assistant</p>
            <p>Fraud Detection AI</p>
            <p>AI-Driven Investment Advisor</p>
            <p>AI-Powered Diagnostic Assistant</p>
            <p>Patient Flow Optimization</p>
            <p>Citizen Service Chatbox</p>
            <p>AI for Public Safety</p>
          </div>
        </div>
      </div>
      <div className="flex justify-between px-48 bg-gray-200">
        <p>@2025 copyrights</p>
        <p>
          All kinds of solutions available for every Business Website Design
        </p>
      </div>
    </>
  );
};

export default UserFooter;
