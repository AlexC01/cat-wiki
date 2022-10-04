import axios, { AxiosResponse } from "axios";
import { CatBreed, MostSearchCats, SingleCat } from "models/Cats";

const baseUrl = process.env.REACT_APP_API_URL;

const fetchApi = async <T>(extension: string, query?: string): Promise<T> => {
  const request: AxiosResponse = await axios(
    `${baseUrl}${extension}${query || ""}`,
  );
  return request.data;
};

export const getCatByBreed = (query: string) =>
  fetchApi<CatBreed[]>("/cat/breeds", `?search=${query}`);

export const getCatById = (id: string) =>
  fetchApi<SingleCat[]>(`/cat/breeds/${id}`, "?limit=8");

export const getMostSearch = () =>
  fetchApi<MostSearchCats[]>("/cat/most-search");
