import React from "react";
import UserFooter from "./UserFooter";
import UserHeader from "./UserHeader";

const UserLayout = (props) => {
  return (
    <>
      <UserHeader />
      <div className="px-24 py-8">{props.children}</div>
      <UserFooter />
    </>
  );
};

export default UserLayout;
