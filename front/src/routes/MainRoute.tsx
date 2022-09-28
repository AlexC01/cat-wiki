import React from "react";
import { Outlet } from "react-router-dom";

const MainRoute = () => {
  return (
    <div className="bg-blue-200">
      <Outlet />
    </div>
  );
};

export default MainRoute;
