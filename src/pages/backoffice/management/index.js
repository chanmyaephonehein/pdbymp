"use client";
import React, { useState } from "react";
import { FiArrowRight, FiX, FiUserPlus } from "react-icons/fi";
import { CiFilter } from "react-icons/ci";

const UserManagement = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selectedRole, setSelectedRole] = useState(""); // Role Filter
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    role: "",
  });

  const users = [
    {
      id: 1,
      name: "Minphone Myat",
      email: "minphonemyat2726@gmail.com",
      role: "Admin",
    },
    { id: 2, name: "Thomas", email: "tlynn3610@gmail.com", role: "Staff" },
    {
      id: 5,
      name: "Jayson Chenn",
      email: "jaysonchenn17@gmail.com",
      role: "Staff",
    },
    {
      id: 6,
      name: "Chan Myae Phone Hein",
      email: "chanmyaephonehein2004@gmail.com",
      role: "Admin",
    },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    console.log("User Data Submitted:", userData);
    setIsModalOpen(false);
    setUserData({ name: "", email: "", password: "", role: "" });
  };

  // Filter users based on selected role
  const filteredUsers = selectedRole
    ? users.filter((user) => user.role === selectedRole)
    : users;

  return (
    <div className="min-h-screen p-6">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-6">
        <button className="bg-gray-200 px-4 py-2 rounded-md">← Back</button>
        <h2 className="text-2xl font-semibold">Users</h2>
        <button
          className="bg-gray-300 px-4 py-2 flex items-center gap-2 rounded-md hover:bg-gray-400"
          onClick={() => setIsModalOpen(true)}
        >
          <FiUserPlus />
          Add User
        </button>
      </div>

      {/* Search & Filter Section */}
      <div className="flex justify-between items-center mb-4">
        <div>
          <label className="block text-gray-700 mb-1">Search by Name</label>
          <input
            type="text"
            className="w-64 p-2 border border-gray-300 rounded-md"
            placeholder="Enter name..."
          />
        </div>

        {/* Filter Button */}
        <button
          className="bg-gray-300 px-4 py-2 flex items-center gap-2 rounded-md hover:bg-gray-400"
          onClick={() => setIsFilterOpen(true)}
        >
          <CiFilter />
          Filter
        </button>
      </div>

      {/* User Table */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-3 border">Action</th>
              <th className="p-3 border">ID</th>
              <th className="p-3 border">Name</th>
              <th className="p-3 border">Email</th>
              <th className="p-3 border">Role</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((user) => (
              <tr key={user.id} className="border">
                <td className="p-3 border text-center">
                  <FiArrowRight className="cursor-pointer" />
                </td>
                <td className="p-3 border">{user.id}</td>
                <td className="p-3 border">{user.name}</td>
                <td className="p-3 border">{user.email}</td>
                <td className="p-3 border">{user.role}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Filter Modal */}
      {isFilterOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-80 relative">
            {/* Close Button */}
            <button
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
              onClick={() => setIsFilterOpen(false)}
            >
              <FiX size={20} />
            </button>

            <h2 className="text-xl font-semibold mb-4">Filter Users</h2>

            {/* Role Filter */}
            <div className="mb-4">
              <label className="block text-sm text-gray-700">
                Filter by Role
              </label>
              <select
                className="w-full p-2 border border-gray-300 rounded-md"
                value={selectedRole}
                onChange={(e) => setSelectedRole(e.target.value)}
              >
                <option value="">All Roles</option>
                <option value="Admin">Admin</option>
                <option value="Staff">Staff</option>
              </select>
            </div>

            {/* Buttons */}
            <div className="flex justify-between mt-4">
              <button
                className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-700"
                onClick={() => {
                  setSelectedRole("");
                  setIsFilterOpen(false);
                }}
              >
                Clear All
              </button>
              <button
                className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700"
                onClick={() => setIsFilterOpen(false)}
              >
                Apply Filter
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Add User Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96 relative">
            {/* Close Button */}
            <button
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
              onClick={() => setIsModalOpen(false)}
            >
              <FiX size={20} />
            </button>
            <h2 className="text-xl font-semibold mb-4">Add New User</h2>
            {/* Name */}
            <div className="mb-4">
              <label className="block text-sm text-gray-700">Name</label>
              <input
                type="text"
                name="name"
                value={userData.name}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md"
                placeholder="Enter name"
              />
            </div>
            {/* Email */}
            <div className="mb-4">
              <label className="block text-sm text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                value={userData.email}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md"
                placeholder="Enter email"
              />
            </div>{" "}
            <div className="mb-4">
              <label className="block text-sm text-gray-700">Password</label>
              <input
                type="password"
                name="password"
                value={userData.password}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md"
                placeholder="Enter password"
              />
            </div>
            {/* Role Selection */}
            <div className="mb-4">
              <label className="block text-sm text-gray-700">Role</label>
              <select
                name="role"
                value={userData.role}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md"
              >
                <option value="">Select Role</option>
                <option value="Admin">Admin</option>
                <option value="Staff">Staff</option>
              </select>
            </div>
            {/* Buttons */}
            <div className="flex justify-between mt-4">
              <button
                className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-700"
                onClick={() => setIsModalOpen(false)}
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700"
                onClick={handleSubmit}
              >
                Add User
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserManagement;
