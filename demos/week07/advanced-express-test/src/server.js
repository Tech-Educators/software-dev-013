import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { routes } from "./routes.js";

export const app = express();

app.use(express.json());
app.use(cors());
dotenv.config();
const PORT = 8080;

app.use("/api", routes);

app.listen(PORT, () => console.log(`server running on ${PORT} ( ˘ ³˘)ノ°ﾟº❍｡`));
