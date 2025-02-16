import { useRouter } from "next/router";
import React, { useState, useRef, useEffect } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const UserHeader = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const dropdownRef = useRef(null);
  const router = useRouter();

  const navBarList = [
    { name: "Home", link: "/" },
    {
      name: "Solutions",
      dropdown: [
        { name: "All Solutions", link: "/user/solutions" },
        {
          name: "Learning Management System",
          link: "/user/solutions/1",
        },
        { name: "Automated Grading Assistant", link: "/user/solutions/2" },
        { name: "Fraud Detection AI", link: "/user/solutions/3" },
        {
          name: "AI-Driven Investment Advisor",
          link: "/user/solutions/4",
        },
        {
          name: "AI-Powered Diagnostic Assistant",
          link: "/user/solutions/5",
        },
        {
          name: "Patient Flow Optimization",
          link: "/user/solutions/6",
        },
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

  // Close dropdown when clicking outside
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
    <nav className="flex flex-row justify-between bg-gray-100 px-10 py-4">
      <div
        className="flex gap-3 items-center cursor-pointer"
        onClick={() => {
          router.push({ pathname: "/" });
        }}
      >
        <div className="border border-black w-12 h-12 rounded-full"></div>
        <p className="text-black">AI Solutions</p>
      </div>
      <div ref={dropdownRef} className="relative flex space-x-1 ">
        {navBarList.map((item, index) => (
          <div key={index} className="relative">
            {item.dropdown ? (
              // Dropdown Button with Icon
              <button
                onClick={() =>
                  setOpenDropdown(openDropdown === item.name ? null : item.name)
                }
                className="flex items-center px-4 py-2 text-gray-700 hover:text-blue-400"
              >
                {item.name}
                <span className="ml-2 transition-transform duration-300">
                  {openDropdown === item.name ? (
                    <FiChevronUp className="text-gray-700" />
                  ) : (
                    <FiChevronDown className="text-gray-700" />
                  )}
                </span>
              </button>
            ) : (
              // Regular Navigation Links
              <button
                onClick={() => router.push({ pathname: `${item.link}` })}
                className="px-4 py-2 text-gray-700 hover:text-blue-400"
              >
                {item.name}
              </button>
            )}

            {/* Dropdown Menu with Animation */}
            {openDropdown === item.name && item.dropdown && (
              <div className="absolute left-0 mt-2 w-64 bg-white border rounded-md shadow-md transition-opacity duration-300 opacity-100">
                <ul className="py-2">
                  {item.dropdown.map((subItem, subIndex) => (
                    <li key={subIndex}>
                      <a
                        onClick={() => {
                          router.push({ pathname: `${subItem.link}` });
                          setOpenDropdown(null);
                        }}
                        className="block px-4 py-2 hover:bg-gray-100 cursor-pointer text-gray-700"
                      >
                        {subItem.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </nav>
  );
};

export default UserHeader;
