import fetch from "node-fetch";
import { CatBreed, SingleCat } from "../models/cats";

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

export const getSingleBreed = async (breedId: string) => {
  const response = await fetch(`${baseURL}/images/search?breed_id=${breedId}`, {
    headers: { "x-api-key": process.env.CAT_API_KEY || "" }
  });
  if (response.status === 404) {
    throw new Error();
  }
  const result = (await response.json()) as SingleCat[];
  return result;
};
