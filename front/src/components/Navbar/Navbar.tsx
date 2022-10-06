import React from "react";
import { useNavigate } from "react-router-dom";
import CatLogo from "../../assets/CatwikiLogo.svg";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div>
      <img
        onClick={() => navigate("/")}
        src={CatLogo}
        alt="Cat Wiki Logo"
        className="cursor-pointer"
      />
    </div>
  );
};

export default Navbar;
