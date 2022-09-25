import fetch from "node-fetch";
import { CatBreed, FavoritesCats, MostSearchCats, SingleCat } from "../models/cats";

const baseURL = "https://api.thecatapi.com/v1";

export const getBreedByName = async (query: string) => {
  const response = await fetch(`${baseURL}/breeds/search?q=${query}`, {
    headers: { "x-api-key": process.env.CAT_API_KEY || "" }
  });
  if (response.status === 404) {
    throw new Error();
  }
  const result = (await response.json()) as CatBreed[];
  return result;
};

export const getSingleBreed = async (breedId: string, limit: number) => {
  const response = await fetch(`${baseURL}/images/search?breed_id=${breedId}&limit=${limit}`, {
    headers: { "x-api-key": process.env.CAT_API_KEY || "" }
  });
  if (response.status === 404) {
    throw new Error();
  }
  const result = (await response.json()) as SingleCat[];
  return result;
};

export const getMostSearch = async () => {
  const response = await fetch(`${baseURL}/favourites`, {
    headers: { "x-api-key": process.env.CAT_API_KEY || "" }
  });
  if (response.status === 404) {
    throw new Error();
  }
  const result = (await response.json()) as FavoritesCats[];

  const mostSearch = (await mapMostSearch(result)) as MostSearchCats[];
  return mostSearch;
};

const mapMostSearch = async (arr: FavoritesCats[]) => {
  const newArr = await Promise.all(
    arr.map(async item => {
      const response = await getSingleBreed(item.sub_id, 1);
      const newObj = {
        id: response[0].breeds[0].id,
        name: response[0].breeds[0].name,
        description: response[0].breeds[0].description,
        image: { id: response[0].id, url: response[0].url }
      };
      return newObj;
    })
  );
  return newArr;
};
