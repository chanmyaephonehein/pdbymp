"use client";
import React from "react";
import Link from "next/link";

const AdminSidebar = () => {
  return (
    <aside className="w-64 min-h-screen p-6 bg-white shadow-lg z-50">
      {/* Sidebar Logo */}
      <div
        className="flex gap-3 items-center cursor-pointer mb-10"
        onClick={() => router.push("/")}
      >
        <img src="/image18.png  " className="w-12 h-12" />
        <p className="text-black">AI Solutions</p>
      </div>

      {/* Sidebar Navigation */}
      <nav className="flex flex-col space-y-4 gap-5 ml-2 text-md">
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
          Users Management
        </Link>
      </nav>
    </aside>
  );
};

export default AdminSidebar;
