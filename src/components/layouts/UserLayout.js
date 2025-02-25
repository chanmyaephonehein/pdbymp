import React from "react";
import UserFooter from "./UserFooter";
import UserHeader from "./UserHeader";
import { useRouter } from "next/router";

const UserLayout = (props) => {
  const router = useRouter();
  return (
    <>
      <UserHeader /> <hr className="border-gray-300 bg-customBlack" />
      <div className="my-10">{props.children}</div>
      <UserFooter />
    </>
  );
};

export default UserLayout;
