import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

function Layout({ contentPage }) {
  // check đăng nhập ở đây
  return (
    <div>
      <Header />
      {contentPage}
      <Footer />
    </div>
  );
}

export default Layout;
