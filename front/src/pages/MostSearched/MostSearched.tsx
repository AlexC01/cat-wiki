import CatImage from "components/Images/CatImage";
import Loading from "components/Loading/Loading";
import { MostSearchCats } from "models/Cats";
import NotFound from "pages/Error/NotFound";
import React, { useEffect, useState } from "react";
import { getMostSearch } from "services/http";

const MostSearched = () => {
  const [breeds, setBreeds] = useState<MostSearchCats[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const getInfo = async () => {
    setLoading(true);
    try {
      const result = await getMostSearch();
      setBreeds(result);
    } catch (err) {
      console.log(err);
      setError(true);
    }
    setLoading(false);
  };

  useEffect(() => {
    getInfo();
  }, []);

  return (
    <section>
      {loading && <Loading />}
      {!loading && !error && (
        <>
          <h1 className="text-3xl text-textColor font-bold mb-10">
            Top 10 most searched breeds
          </h1>
          {breeds.map((item, index) => (
            <div key={item.id} className="mt-12 grid grid-cols-4">
              <div>
                <CatImage url={item.image.url} name={item.name} />
              </div>
              <div className="col-span-3">
                <h2 className="text-3xl text-textColor font-bold">
                  {index + 1}. {item.name}
                </h2>
                <p className="text-textColor mt-5 font-semibold">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </>
      )}
      {!loading && error && <NotFound />}
    </section>
  );
};

export default MostSearched;
