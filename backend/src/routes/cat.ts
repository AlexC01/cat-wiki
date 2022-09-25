import express, { RequestHandler } from "express";
import { CatBreed, MostSearchCats, SingleCat } from "../models/cats";
import { getBreedByName, getMostSearch, getSingleBreed } from "../services/catServices";

const router = express.Router();

interface query {
  search: string;
  limit: string;
}

router.get("/cat/breeds", (async (req, res) => {
  try {
    const { search } = req.query as unknown as query;
    const cats: CatBreed[] = await getBreedByName(search);
    res.send(cats);
  } catch (err) {
    res.status(500).send();
  }
}) as RequestHandler);

router.get("/cat/breeds/:id", (async (req, res) => {
  try {
    const { limit } = req.query as unknown as query;
    const cat: SingleCat[] = await getSingleBreed(req.params.id, parseInt(limit) ?? 8);
    res.send(cat);
  } catch (err) {
    res.status(500).send();
  }
}) as RequestHandler);

router.get("/cat/most-search", (async (_req, res) => {
  try {
    const cats: MostSearchCats[] = await getMostSearch();
    res.send(cats);
  } catch (err) {
    res.status(500).send();
  }
}) as RequestHandler);

export default router;
