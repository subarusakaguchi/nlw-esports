import { Router } from "express";

import { ListGameAdsController } from "../../../../modules/games/useCases/listGameAds/ListGameAdsController";
import { ListGamesController } from "../../../../modules/games/useCases/listGames/ListGamesController";

const gamesRoutes = Router();

const listGamesController = new ListGamesController();
const listGameAdsController = new ListGameAdsController();

gamesRoutes.get("/games/all", listGamesController.handle);

gamesRoutes.get("/games/:id/ads", listGameAdsController.handle);

export { gamesRoutes };
