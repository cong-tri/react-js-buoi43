import React from "react";
import { useSelector } from "react-redux";
import { localStorageService } from "../../Services/localStorageService";

function UserNav() {
  let user = useSelector((state) => state.userSlice.userInfo);
  let btnClass = "px-5 py-2 rounded border border-black";
  let renderContent = () => {
    if (user) {
      // đã đăng nhập
      return (
        <>
          <span>{user.hoTen}</span>
          <button onClick={handleLogOut} className={btnClass}>
            Đăng xuất
          </button>
        </>
      );
    } else {
      return (
        <>
          <button
            onClick={() => {
              window.location.href = "/login";
            }}
            className={btnClass}
          >
            Đăng nhập
          </button>
          <button
            className={btnClass}
            onClick={() => {
              window.location.href = "/register";
            }}
          >
            Đăng ký
          </button>
        </>
      );
    }
  };
  let handleLogOut = () => {
    localStorageService.removeUser();
    window.location.reload();
  };
  console.log(user);
  return <div className="flex items-center space-x-5">{renderContent()}</div>;
}

export default UserNav;
