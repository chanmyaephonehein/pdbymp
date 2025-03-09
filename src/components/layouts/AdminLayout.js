"use client";
import React, { useState } from "react";
import AdminSidebar from "@/components/layouts/AdminSidebar";
import AdminDrawer from "@/components/layouts/AdminDrawer";
import AdminHeader from "./AdminHeader";

import { useRouter } from "next/router";

const AdminLayout = ({ children }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const router = useRouter();
  const isLogin = router.pathname.includes("/login");
  if (isLogin) {
    return <>{children}</>;
  } else
    return (
      <div className="flex min-h-screen">
        <div className="hidden lg:flex">
          <AdminSidebar />
        </div>

        <div className="flex flex-col flex-1">
          <AdminHeader setIsDrawerOpen={setIsDrawerOpen} />
          <main className="p-6">{children}</main>
        </div>

        <AdminDrawer
          isOpen={isDrawerOpen}
          onClose={() => setIsDrawerOpen(false)}
        />
      </div>
    );
};

export default AdminLayout;
