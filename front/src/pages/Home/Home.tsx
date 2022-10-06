import React, { useState, useEffect } from "react";
import CatImage from "components/Images/CatImage";
import Search from "components/Search/Search";
import { MostSearchCats } from "models/Cats";
import { getMostSearch } from "services/http";
import Loading from "components/Loading/Loading";
import CatLogo from "../../assets/CatwikiLogo.svg";

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [cats, setCats] = useState<MostSearchCats[]>([]);

  const getMostBreedsSearch = async () => {
    setLoading(true);
    try {
      const results = await getMostSearch();
      setCats(results);
    } catch (err) {
      console.log(err);
    }
    setLoading(false);
  };

  useEffect(() => {
    getMostBreedsSearch();
  }, []);

  return (
    <section>
      <div className="hero-styles rounded-tl-boxes rounded-tr-boxes bg-no-repeat">
        <div className="text-white pl-12 lg:pl-20 pt-16 lg:pt-24">
          <div>
            <img
              src={CatLogo}
              alt="Cat Logo"
              className="invert-color cat-logo"
            />
            <p className="text-lg xl:text-2xl mt-3">
              Get to know more about your
            </p>
            <p className="text-lg xl:text-2xl">cat breed</p>
            <Search />
          </div>
        </div>
      </div>
      <div className="rounded-bl-boxes rounded-br-boxes bg-cream  pt-5 pb-14 text-textColor">
        <div className="px-12 lg:px-20">
          <div className="font-semibold">
            <h4>Most Searched Breeds</h4>
            <hr className="border-lineColor border-2 mt-2 w-16 rounded-2xl" />
          </div>
          <div className="mt-9 flex justify-between items-end">
            <div className="text-3xl font-bold">
              <h2>66+ Breeds For you</h2>
              <h2>to discover</h2>
            </div>
            <div className="text-secondText flex cursor-pointer hover:text-secondTextHover">
              <p className="uppercase font-bold mr-2">See more</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
              </svg>
            </div>
          </div>
        </div>
        {loading && (
          <div className="px-12 lg:px-20">
            <Loading />
          </div>
        )}
        {!loading && (
          <div className="mt-5  relative">
            <div className="flex justify-between flex-wrap gap-4 xl:gap-2 px-12 lg:px-20">
              {cats.splice(0, 4).map(item => (
                <div key={item.id} className="z-20">
                  <CatImage url={item.image.url} name={item.name} />
                  <h3 className="mt-6 text-xl text-textColor font-bold">
                    {item.name}
                  </h3>
                </div>
              ))}
            </div>
            <div className="w-48 h-40 2xl:w-52 2xl:h-60 bg-boxColor absolute rounded-xl top-8 left-16 z-0" />
          </div>
        )}
      </div>
    </section>
  );
};

export default Home;
