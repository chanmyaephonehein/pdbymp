"use client";
import React, { useState } from "react";
import AdminSidebar from "@/components/layouts/AdminSidebar";
import AdminHeader from "@/components/layouts/AdminHeader";
import AdminDrawer from "@/components/layouts/AdminDrawer";

const AdminLayout = ({ children }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <div className="flex min-h-screen">
      {/* Sidebar (Desktop View Only) */}
      <div className="hidden lg:flex">
        <AdminSidebar />
      </div>

      {/* Main Content Area */}
      <div className="flex flex-col flex-1">
        {/* Header (Includes Search + Drawer Button) */}
        <AdminHeader setIsDrawerOpen={setIsDrawerOpen} />

        {/* Page Content */}
        <main className="p-6">{children}</main>
      </div>

      {/* Drawer (For Mobile & Tablet) */}
      <AdminDrawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      />
    </div>
  );
};

export default AdminLayout;
