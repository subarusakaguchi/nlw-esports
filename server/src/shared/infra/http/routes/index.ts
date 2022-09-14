import { Router } from "express";

import { adsRoutes } from "./ads.routes";
import { gamesRoutes } from "./games.routes";

const routes = Router();

routes.use(adsRoutes);
routes.use(gamesRoutes);

export { routes };
