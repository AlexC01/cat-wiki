import React, { useState, useEffect } from "react";
import CatImage from "components/Images/CatImage";
import Search from "components/Search/Search";
import { MostSearchCats } from "models/Cats";
import { getMostSearch } from "services/http";
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
            <div className="mt-5 flex justify-center items-center">
              <svg
                className="inline mr-2 w-10 h-10 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
            </div>
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
