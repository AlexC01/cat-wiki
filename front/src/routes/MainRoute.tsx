import Footer from "components/Footer/Footer";
import Navbar from "components/Navbar/Navbar";
import React from "react";
import { Outlet } from "react-router-dom";

const MainRoute = () => {
  return (
    <div className="font-montserrat min-h-screen">
      <div className="px-20 py-10">
        <Navbar />
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainRoute;
