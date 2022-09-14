import cors from "cors";
import express from "express";
import "reflect-metadata";
import "../container";

import { adsRoutes } from "./routes/ads.routes";

const PORT = process.env.PORT || 8888;

const app = express();

app.use(cors());

app.use(express.json());

app.use(adsRoutes);

app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));
