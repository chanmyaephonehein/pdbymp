import React from "react";
import UserFooter from "./UserFooter";
import UserHeader from "./UserHeader";
import { useRouter } from "next/router";

const UserLayout = (props) => {
  const router = useRouter();
  const isContactUs = router.pathname.includes("/contactus");
  return (
    <>
      <UserHeader />
      <div className={isContactUs ? "" : "px-24 py-8"}>{props.children}</div>
      <UserFooter />
    </>
  );
};

export default UserLayout;
