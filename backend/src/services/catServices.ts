import fetch from "node-fetch";
import { CatBreed } from "../models/cats";

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
