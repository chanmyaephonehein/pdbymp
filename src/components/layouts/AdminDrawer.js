"use client";
import React from "react";
import { FiX, FiUser } from "react-icons/fi";
import Link from "next/link";

const AdminDrawer = ({ isOpen, onClose }) => {
  return (
    <div
      className={`fixed inset-0 z-50 transform ${
        isOpen ? "translate-x-0" : "translate-x-full"
      } transition-transform duration-300`}
    >
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50"
        onClick={onClose}
      ></div>

      {/* Drawer Content */}
      <div className="w-64 h-full bg-white p-6 shadow-lg absolute right-0">
        <button onClick={onClose} className="mb-4">
          <FiX size={24} />
        </button>

        {/* Profile (Moved from Navbar) */}
        <div className="mb-6 flex items-center gap-3">
          <FiUser size={24} />
          <span className="text-gray-700">Admin</span>
        </div>

        {/* Navigation */}
        <nav className="flex flex-col space-y-4">
          <Link
            href="/backoffice/dashboard"
            className="text-gray-700 hover:text-blue-500"
          >
            Dashboard
          </Link>
          <Link
            href="/backoffice/management"
            className="text-gray-700 hover:text-blue-500"
          >
            User Management
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default AdminDrawer;
