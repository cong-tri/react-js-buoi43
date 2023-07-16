import React from "react";
import UserNav from "../UserNav";

function Header() {
  return (
    <div className="shadow mb-5">
      <div className="container flex justify-between h-20 items-center">
        <span className="text-2xl font-bold text-red-500">CyperFlix</span>
        <UserNav />
      </div>
    </div>
  );
}

export default Header;
