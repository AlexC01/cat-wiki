import Footer from "components/Footer/Footer";
import Navbar from "components/Navbar/Navbar";
import React from "react";
import { Outlet } from "react-router-dom";

const MainRoute = () => {
  return (
    <div className="font-montserrat min-h-screen">
      <div className="px-5 sm:px-10 md:px-16 lg:px-24 py-10">
        <Navbar />
        <div className="mt-8 min-h-screen">
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MainRoute;
