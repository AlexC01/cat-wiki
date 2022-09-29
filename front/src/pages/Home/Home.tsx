import Search from "components/Search/Search";
import React from "react";
import CatLogo from "../../assets/CatwikiLogo.svg";

const Home = () => {
  return (
    <div className="hero-styles rounded-tl-boxes rounded-tr-boxes bg-no-repeat">
      <div className="text-white pl-12 lg:pl-20 pt-16 lg:pt-24">
        <div>
          <img src={CatLogo} alt="Cat Logo" className="invert-color cat-logo" />
          <p className="text-lg xl:text-2xl mt-3">
            Get to know more about your
          </p>
          <p className="text-lg xl:text-2xl">cat breed</p>
          <Search />
        </div>
      </div>
    </div>
  );
};

export default Home;
