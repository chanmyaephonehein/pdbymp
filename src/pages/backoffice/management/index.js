"use client";
import React, { useEffect, useState } from "react";
import { FiArrowRight, FiX, FiUserPlus } from "react-icons/fi";
import { CiFilter } from "react-icons/ci";
import { useRouter } from "next/router";
import { FaSearch } from "react-icons/fa";

const UserManagement = () => {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selectedRole, setSelectedRole] = useState(""); // Role Filter
  const [searchTerm, setSearchTerm] = useState(""); // Search Input
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    role: "",
  });

  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    const response = await fetch("http://localhost:3000/api/users", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    const result = await response.json();
    setUsers(result);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleSubmit = async () => {
    if (
      !userData.name ||
      !userData.email ||
      !userData.password ||
      !userData.role
    ) {
      alert("Please fill all fields.");
      return;
    }

    try {
      console.log("Sending user data:", userData); // Debugging: Check request data

      const response = await fetch("http://localhost:3000/api/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData), // Ensure JSON format
      });

      const result = await response.json();
      fetchUsers();
      alert("User Added Successfully");
      setIsModalOpen(false);
      if (!response.ok) {
        console.error("Error response from server:", result);
        throw new Error(result.message || "Failed to add user");
      }

      console.log("User added successfully:", result);
      setUserData({ name: "", email: "", password: "", role: "" });
    } catch (error) {
      console.error("Error adding user:", error.message);
      alert(`Failed to add user: ${error.message}`);
    }
  };

  const filteredUsers = users.filter((user) => {
    return (
      (selectedRole ? user.role === selectedRole : true) &&
      user.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  return (
    <div className="min-h-screen p-6">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold">Users</h2>
        <button
          className="bg-gray-700 px-3 py-2 text-white flex items-center gap-2 rounded-md hover:bg-gray-900"
          onClick={() => setIsModalOpen(true)}
        >
          <FiUserPlus />
          Add User
        </button>
      </div>

      {/* Search & Filter Section */}
      <div className="flex items-center w-full justify-between pb-8">
        <div className="flex items-center gap-1">
          <input
            type="text"
            placeholder="Search"
            className="w-[150px] lg:w-[400px] p-2 border border-gray-300 rounded-md mr-2"
          />
          <div className="border border-gray-300 p-3 rounded-md cursor-pointer hover:bg-mainColor">
            <FaSearch />
          </div>
        </div>

        {/* Filter Button */}
        <button
          className="bg-gray-700 px-4 py-2 text-white flex items-center gap-2 rounded-md hover:bg-gray-900"
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
                onChange={(e) => {
                  setUserData({ ...userData, name: e.target.value });
                }}
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
                onChange={(e) => {
                  setUserData({ ...userData, email: e.target.value });
                }}
                className="w-full p-2 border border-gray-300 rounded-md"
                placeholder="Enter email"
              />
            </div>

            {/* Password */}
            <div className="mb-4">
              <label className="block text-sm text-gray-700">Password</label>
              <input
                type="password"
                name="password"
                value={userData.password}
                onChange={(e) => {
                  setUserData({ ...userData, password: e.target.value });
                }}
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
                onChange={(e) => {
                  setUserData({ ...userData, role: e.target.value });
                }}
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
