import express from "express";
import { CatBreed } from "../models/cats";
import { getBreedByName } from "../services/catServices";

const router = express.Router();

router.get("/cat/breeds", async (_req, res) => {
  try {
    const cats: CatBreed[] = await getBreedByName();
    res.send(cats);
  } catch (err) {
    res.status(500).send();
  }
});

export default router;
