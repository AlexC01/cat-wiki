import express from "express";
import { CatBreed, SingleCat } from "../models/cats";
import { getBreedByName, getSingleBreed } from "../services/catServices";

const router = express.Router();

interface query {
  search: string;
}

router.get("/cat/breeds", async (req, res) => {
  try {
    const { search } = req.query as unknown as query;
    const cats: CatBreed[] = await getBreedByName(search);
    res.send(cats);
  } catch (err) {
    res.status(500).send();
  }
});

router.get("/cat/breeds/:id", async (req, res) => {
  try {
    const cat: SingleCat[] = await getSingleBreed(req.params.id);
    res.send(cat);
  } catch (err) {
    res.status(500).send();
  }
});

export default router;
