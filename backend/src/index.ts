import express from "express";
import catRouter from "./routes/cat";

const app = express();
const PORT = process.env.PORT ?? 3000;

app.use(express.json());
app.use(catRouter);

app.listen(PORT, () => console.log(`App runing on ${PORT}`));
