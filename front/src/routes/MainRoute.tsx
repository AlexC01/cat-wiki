import Navbar from "components/Navbar/Navbar";
import React from "react";
import { Outlet } from "react-router-dom";

const MainRoute = () => {
  return (
    <div className="font-montserrat min-h-screen px-20 py-10">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default MainRoute;
