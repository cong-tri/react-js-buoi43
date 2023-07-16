import React from "react";
import Header from "../../Components/Header";
import ListMovie from "../../Components/ListMovie";
import TabsMovie from "../../Components/TabsMovie";
import Footer from "../../Components/Footer";

function HomePage() {
  return (
    <div>
      <Header />
      <div></div>
      <ListMovie />
      <TabsMovie />
      <Footer />
    </div>
  );
}

export default HomePage;
