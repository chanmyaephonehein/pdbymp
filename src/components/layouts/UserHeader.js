import { useRouter } from "next/router";
import React, { useState, useRef, useEffect } from "react";
import { FiChevronDown, FiChevronUp, FiMenu, FiX } from "react-icons/fi";

const UserHeader = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const dropdownRef = useRef(null);
  const router = useRouter();

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
        { name: "Finance", link: "/user/industries/1" },
        { name: "Education", link: "/user/industries/2" },
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
    <nav className=" px-6 py-4 flex justify-between items-center sticky top-0 bg-white z-50 shadow-md">
      {/* Logo & Branding */}
      <div
        className="flex gap-3 items-center cursor-pointer"
        onClick={() => router.push("/")}
      >
        <img src="/image18.png  " className="w-12 h-12" />
        <p className="text-black">AI Solutions</p>
      </div>

      {/* Mobile & Tablet View - Drawer */}
      <div className="lg:hidden">
        <button onClick={() => setIsDrawerOpen(!isDrawerOpen)}>
          {isDrawerOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Desktop View */}
      <div ref={dropdownRef} className="hidden lg:flex space-x-4">
        {navBarList.map((item, index) => (
          <div key={index} className="relative">
            {item.dropdown ? (
              <button
                onClick={() =>
                  setOpenDropdown(openDropdown === item.name ? null : item.name)
                }
                className="flex items-center px-4 py-2 text-gray-700 hover:text-blue-400"
              >
                {item.name}
                <span className="ml-2 transition-transform duration-300">
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
                className="px-4 py-2 text-gray-700 hover:text-blue-400"
              >
                {item.name}
              </button>
            )}

            {/* Dropdown Menu */}
            {openDropdown === item.name && item.dropdown && (
              <div className="absolute left-0 mt-2 w-64 bg-white border rounded-md shadow-md z-50">
                <ul className="py-2">
                  {item.dropdown.map((subItem, subIndex) => (
                    <li key={subIndex}>
                      {subIndex === 1 || subIndex === 0 ? (
                        <button
                          onMouseDown={(e) => {
                            e.preventDefault(); // Ensures touch responsiveness
                            router.push(subItem.link);
                            setTimeout(() => setOpenDropdown(null), 100);
                          }}
                          className="block px-4 py-2 hover:bg-gray-100 cursor-pointer text-left w-full"
                        >
                          {subItem.name}
                        </button>
                      ) : (
                        <button
                          onMouseDown={(e) => {
                            e.preventDefault(); // Ensures touch responsiveness
                            setTimeout(() => setOpenDropdown(null), 100);
                          }}
                          className="block px-4 py-2 hover:bg-gray-100 cursor-pointer text-left w-full"
                        >
                          {subItem.name}
                        </button>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Mobile Drawer Menu */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-end transition-transform duration-300 ${
          isDrawerOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="bg-white w-64 h-full p-5 overflow-y-auto shadow-lg transition-all duration-300">
          <button className="mb-4" onClick={() => setIsDrawerOpen(false)}>
            <FiX size={24} />
          </button>
          {navBarList.map((item, index) => (
            <div key={index} className="mb-4">
              {item.dropdown ? (
                <div>
                  <button
                    onClick={() =>
                      setOpenDropdown(
                        openDropdown === item.name ? null : item.name
                      )
                    }
                    className="flex items-center w-full text-left p-2 text-gray-700"
                  >
                    {item.name}
                    <span className="ml-auto">
                      {openDropdown === item.name ? (
                        <FiChevronUp />
                      ) : (
                        <FiChevronDown />
                      )}
                    </span>
                  </button>
                  {openDropdown === item.name && (
                    <ul className="pl-4">
                      {item.dropdown.map((subItem, subIndex) => (
                        <li key={subIndex}>
                          {" "}
                          {subIndex === 1 || subIndex === 0 ? (
                            <button
                              onMouseDown={(e) => {
                                e.preventDefault();
                                router.push(subItem.link);
                                setTimeout(() => {
                                  setOpenDropdown(null);
                                  setIsDrawerOpen(false);
                                }, 100);
                              }}
                              className="block p-2 hover:bg-gray-100 cursor-pointer text-left w-full"
                            >
                              {subItem.name}
                            </button>
                          ) : (
                            <button
                              onMouseDown={(e) => {
                                e.preventDefault();
                                setTimeout(() => {
                                  setOpenDropdown(null);
                                  setIsDrawerOpen(false);
                                }, 100);
                              }}
                              className="block p-2 hover:bg-gray-100 cursor-pointer text-left w-full"
                            >
                              {subItem.name}
                            </button>
                          )}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ) : (
                <button
                  onClick={() => {
                    router.push(item.link);
                    setIsDrawerOpen(false);
                  }}
                  className="block w-full text-left p-2 text-gray-700 hover:bg-gray-100"
                >
                  {item.name}
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default UserHeader;
