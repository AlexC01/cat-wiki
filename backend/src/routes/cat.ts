import express from "express";
import { CatBreed } from "../models/cats";
import { getBreedByName } from "../services/catServices";

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

export default router;
