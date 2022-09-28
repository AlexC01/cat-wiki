import React from "react";
import CatLogo from "../../assets/CatwikiLogo.svg";

const Footer = () => {
  return (
    <footer className="footer absolute bottom-0 w-full px-20">
      <div className="justify-center flex flex-row items-center flex-wrap md:justify-between px-16 py-8 bg-black text-white footer">
        <div className="pl-10">
          <img src={CatLogo} alt="Cat Logo" className="invert-color" />
        </div>
        <div>
          <p>
            © created by <span className="font-bold">acuadraq</span> - 2022
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
