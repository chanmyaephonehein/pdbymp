"use client";
import React, { useState } from "react";
import { FiMenu, FiUser, FiX } from "react-icons/fi";
import { CiFilter } from "react-icons/ci";
import Select from "react-select";
import countryList from "react-select-country-list";

const AdminHeader = ({ setIsDrawerOpen }) => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedStatus, setSelectedStatus] = useState(null);

  const statusOptions = [
    { value: "PENDING", label: "🟡 Pending" },
    { value: "IN_PROGRESS", label: "🔵 In Progress" },
    { value: "RESOLVED", label: "🟢 Resolved" },
  ];

  const countryOptions = countryList().getData();

  const clearFilters = () => {
    setSelectedCountry(null);
    setSelectedStatus(null);
  };

  const applyFilters = () => {
    console.log("Selected Country:", selectedCountry);
    console.log("Selected Status:", selectedStatus);
    setIsFilterOpen(false); // Close modal after applying filters
  };

  return (
    <>
      <header className="flex justify-between items-center p-4 sticky top-0 bg-white z-50 shadow-md">
        {/* AI Solution Logo */}
        <div
          className="lg:hidden flex gap-2 items-center cursor-pointer w-64"
          onClick={() => router.push("/")}
        >
          <img src="/image18.png" className="w-12 h-12" />
          <p className="text-black">AI Solutions</p>
        </div>
        {/* Search Input */}
        {/* <div className="flex items-center mx-4 justify-center w-full">
          <input
            type="text"
            placeholder="Search"
            className="w-[150px] lg:w-[400px] p-2 border border-gray-300 rounded-md mr-2"
          />
          <div className="border border-gray-300 p-3 rounded-md cursor-pointer hover:bg-mainColor">
            <FaSearch />
          </div>
        </div> */}
        <div className="flex justify-end items-center w-full">
          <div className="hidden lg:flex items-center  gap-8">
            {/* <CiFilter
            className="text-3xl cursor-pointer"
            onClick={() => setIsFilterOpen(true)}
          /> */}
            <FiUser className="text-2xl cursor-pointer" />
          </div>
        </div>
        {/* Mobile/Tablet Drawer Toggle */}
        <button
          className="lg:hidden flex items-center gap-5"
          onClick={() => setIsDrawerOpen(true)}
        >
          <CiFilter
            className="text-3xl cursor-pointer"
            onClick={() => setIsFilterOpen(true)}
          />
          <FiMenu className="text-2xl cursor-pointer" />
        </button>
      </header>

      {/* 🔥 Filter Modal */}
      {isFilterOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96 ">
            <div className="flex justify-between items-center mb-4">
              <span className="text-xl font-semibold">Filter Options</span>
              <button
                className="text-gray-500 hover:text-gray-700"
                onClick={() => setIsFilterOpen(false)}
              >
                <FiX size={20} />
              </button>
            </div>
            {/* Country Dropdown */}
            <div className="mb-4">
              <label className="block text-sm font-medium">Country</label>
              <Select
                options={countryOptions}
                value={selectedCountry}
                onChange={setSelectedCountry}
                className="mt-1"
              />
            </div>

            {/* Status Dropdown */}
            <div className="mb-4">
              <label className="block text-sm font-medium">Status</label>
              <Select
                options={statusOptions}
                value={selectedStatus}
                onChange={setSelectedStatus}
                className="mt-1"
              />
            </div>

            {/* Buttons */}
            <div className="flex justify-between mt-4">
              <button
                className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-700"
                onClick={clearFilters}
              >
                Clear All
              </button>
              <button
                className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700"
                onClick={applyFilters}
              >
                Search
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AdminHeader;
