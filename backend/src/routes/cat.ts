import express from "express";

const router = express.Router();

router.get("/", (_req, res) => {
  res.send({ message: "This is all the cats for you" });
});

export default router;
