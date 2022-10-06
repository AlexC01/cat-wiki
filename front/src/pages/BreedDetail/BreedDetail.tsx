// import CatImage from "components/Images/CatImage";
import BreedSkills from "components/BreedSkills/BreedSkills";
import CatImage from "components/Images/CatImage";
import Loading from "components/Loading/Loading";
import { CatBreed } from "models/Cats";
import NotFound from "pages/Error/NotFound";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCatById } from "services/http";

const BreedDetail = () => {
  const [breed, setBreed] = useState<CatBreed>();
  const [images, setImages] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const { name } = useParams();

  const getBreedInfo = async () => {
    setLoading(true);
    try {
      if (name) {
        const result = await getCatById(name);
        if (result.length === 0) {
          setError(true);
          return;
        }
        setBreed(result[0].breeds[0]);
        setImages(result.map(item => item.url));
        setLoading(false);
      }
    } catch (err) {
      console.log(err);
      setError(true);
    }
  };

  useEffect(() => {
    getBreedInfo();
  }, [name]);

  return (
    <section>
      {loading && <Loading />}
      {!loading && !error && images.length > 0 && breed && (
        <div className="grid grid-cols-3">
          <div className="relative">
            <div className="z-20 pl-20">
              <img
                className="rounded-3xl w-48 h-48 xl:w-80 xl:h-80"
                src={images[0]}
                alt={breed.name}
              />
            </div>
            <div className="w-48 h-40 xl:w-52 xl:h-64 left-16 bg-boxColor absolute rounded-xl top-8 box_behind" />
          </div>
          <div className="pr-20 col-span-2 ml-24">
            <h2 className="text-2xl font-bold text-textColor">{breed.name}</h2>
            <p className="mt-5 text-textColor text-lg font-semibold">
              {breed.description}
            </p>
            <p className="font-bold mt-6 text-lg">
              Temperament:{" "}
              <span className="font-semibold">{breed.temperament}</span>
            </p>
            <p className="font-bold mt-6 text-lg">
              Origin: <span className="font-semibold">{breed.origin}</span>
            </p>
            <p className="font-bold mt-6 text-lg">
              Life Span:{" "}
              <span className="font-semibold">{breed.life_span}</span>
            </p>
            <BreedSkills name="Adaptibility" cant={breed.adaptability} />
            <BreedSkills name="Affection Level" cant={breed.affection_level} />
            <BreedSkills name="Child Friendly" cant={breed.child_friendly} />
            <BreedSkills name="Grooming" cant={breed.grooming} />
            <BreedSkills name="Intelligence" cant={breed.intelligence} />
            <BreedSkills name="Health Issues" cant={breed.health_issues} />
            <BreedSkills name="Social Needs" cant={breed.social_needs} />
            <BreedSkills
              name="Stranger Friendly"
              cant={breed.stranger_friendly}
            />
          </div>
        </div>
      )}
      {!loading && error && <NotFound />}
    </section>
  );
};

export default BreedDetail;
