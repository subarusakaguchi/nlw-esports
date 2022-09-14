import cors from "cors";
import express from "express";

import "reflect-metadata";
import "../container";
import { routes } from "./routes";

const PORT = process.env.PORT || 8888;

const app = express();

app.use(cors());

app.use(express.json());

app.use(routes);

app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));
