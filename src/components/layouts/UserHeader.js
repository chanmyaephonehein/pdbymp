import IndustryImgCard from "@/components/cards/IndustryImgCard";
import SolutionCard from "@/components/cards/SolutionCard";
import { useRouter } from "next/router";
import React, { useState, useRef, useEffect } from "react";
import { FiChevronDown, FiChevronUp, FiMenu, FiX } from "react-icons/fi";

const navBarList = [
  { name: "Home", link: "/" },
  {
    name: "Solutions",
    dropdown: [
      { name: "All Solutions", link: "/user/solutions" },
      { name: "Learning Management System", link: "/user/solutions/1" },
      { name: "Automated Grading Assistant", link: "/user/solutions/2" },
      { name: "Fraud Detection AI", link: "/user/solutions/3" },
      { name: "AI-Driven Investment Advisor", link: "/user/solutions/4" },
      { name: "AI-Powered Diagnostic Assistant", link: "/user/solutions/5" },
      { name: "Patient Flow Optimization", link: "/user/solutions/6" },
      { name: "Citizen Service Chatbot", link: "/user/solutions/7" },
      { name: "AI for Public Safety", link: "/user/solutions/8" },
    ],
  },
  {
    name: "Industries",
    dropdown: [
      { name: "All Industries", link: "/user/industries" },
      { name: "Education", link: "/user/industries/1" },
      { name: "Finance", link: "/user/industries/2" },
      { name: "Healthcare", link: "/user/industries/3" },
      { name: "Government", link: "/user/industries/4" },
    ],
  },
  { name: "Feedbacks", link: "/user/feedbacks" },
  { name: "Blog", link: "/user/blog" },
  { name: "Gallery", link: "/user/gallery" },
  { name: "About Us", link: "/user/aboutus" },
  { name: "Contact Us", link: "/user/contactus" },
];

const UserHeader = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const dropdownRef = useRef(null);
  const router = useRouter();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="container mx-auto w-full max-w-screen-xl flex justify-between items-center bg-mainColor px-6 py-4 text-white relative overflow-hidden">
      <div
        className="flex items-center gap-3 cursor-pointer"
        onClick={() => router.push("/")}
      >
        <img
          src="/image18.png"
          className="w-10 rounded-sm"
          alt="AI Solutions Logo"
        />
        <p className="hidden sm:block">AI Solutions</p>
      </div>

      <button
        className="sm:hidden text-white text-2xl"
        onClick={() => setIsDrawerOpen(true)}
      >
        <FiMenu />
      </button>

      <div ref={dropdownRef} className="hidden sm:flex space-x-4">
        {navBarList.map((item, index) => (
          <div key={index} className="relative">
            {item.dropdown ? (
              <button
                onClick={() =>
                  setOpenDropdown(openDropdown === item.name ? null : item.name)
                }
                className="flex items-center px-4 py-2 hover:text-blue-400"
              >
                {item.name}
                <span className="ml-2">
                  {openDropdown === item.name ? (
                    <FiChevronUp />
                  ) : (
                    <FiChevronDown />
                  )}
                </span>
              </button>
            ) : (
              <button
                onClick={() => router.push(item.link)}
                className="px-4 py-2 hover:text-blue-400"
              >
                {item.name}
              </button>
            )}
          </div>
        ))}
      </div>

      {isDrawerOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-end">
          <div className="w-72 h-full bg-white text-black shadow-lg p-6 flex flex-col">
            <button
              className="self-end text-2xl"
              onClick={() => setIsDrawerOpen(false)}
            >
              <FiX />
            </button>
            <ul className="mt-6 w-full">
              {navBarList.map((item, index) => (
                <li key={index} className="py-2 border-b w-full">
                  {item.dropdown ? (
                    <div>
                      <button
                        onClick={() =>
                          setOpenDropdown(
                            openDropdown === item.name ? null : item.name
                          )
                        }
                        className="flex justify-between w-full px-4 py-2 hover:text-blue-400"
                      >
                        {item.name}
                        {openDropdown === item.name ? (
                          <FiChevronUp />
                        ) : (
                          <FiChevronDown />
                        )}
                      </button>
                      {openDropdown === item.name && (
                        <ul className="pl-4 mt-2">
                          {item.dropdown.map((subItem, subIndex) => (
                            <li key={subIndex} className="py-1">
                              <button
                                onClick={() => router.push(subItem.link)}
                                className="block w-full text-left hover:text-blue-400"
                              >
                                {subItem.name}
                              </button>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ) : (
                    <button
                      onClick={() => router.push(item.link)}
                      className="block w-full px-4 py-2 text-left hover:text-blue-400"
                    >
                      {item.name}
                    </button>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
};

export default UserHeader;
