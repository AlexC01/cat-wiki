import fetch from "node-fetch";
import { CatBreed } from "../models/cats";

const baseURL = "https://api.thecatapi.com/v1";

export const getBreedByName = async () => {
  const response = await fetch(`${baseURL}/breeds`, { headers: { "x-api-key": process.env.CAT_API_KEY || "" } });
  const result = (await response.json()) as CatBreed[];
  return result;
};
