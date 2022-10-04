import express from "express";
import catRouter from "./routes/cat";
import cors from "cors";

const app = express();
const PORT = process.env.PORT ?? 3000;

app.use(express.json());
app.use(cors());
app.use(catRouter);

app.listen(PORT, () => console.log(`App runing on ${PORT}`));
