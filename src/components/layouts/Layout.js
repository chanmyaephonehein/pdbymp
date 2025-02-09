import { useRouter } from "next/router";
import React from "react";
import UserLayout from "./UserLayout";
import AdminLayout from "./AdminLayout";

const Layout = ({ children }) => {
  const router = useRouter();
  const adminLayout = router.pathname.includes("/admin");
  if (adminLayout) {
    return (
      <>
        <AdminLayout>{children}</AdminLayout>
      </>
    );
  }
  return (
    <>
      <UserLayout>{children}</UserLayout>
    </>
  );
};

export default Layout;
