import React, { useState } from "react";
import UserNav from "../UserNav";
import { Button } from "antd";
function Header() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
    document.documentElement.setAttribute(
      "data-theme",
      isDarkMode ? "light" : "dark"
    );
  };
  return (
    <div className="shadow mb-5">
      <div className="container flex justify-between h-20 items-center">
        <span className="text-2xl font-bold text-red-500">CyperFlix</span>
        <UserNav />
        <Button type={isDarkMode} onClick={toggleDarkMode}>
          {isDarkMode ? (
            <i
              className="fa-regular fa-sun fa-2xl"
              style={{ color: "black" }}
            ></i>
          ) : (
            <i
              className="fa-solid fa-moon fa-2xl"
              style={{ color: "white" }}
            ></i>
          )}
        </Button>
      </div>
    </div>
  );
}

export default Header;
