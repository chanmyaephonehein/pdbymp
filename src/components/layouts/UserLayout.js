import React from "react";
import UserFooter from "./UserFooter";
import UserHeader from "./UserHeader";

const UserLayout = (props) => {
  return (
    <>
      <UserHeader />
      <div>{props.children}</div>
      <UserFooter />
    </>
  );
};

export default UserLayout;
