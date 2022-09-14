import { Router } from "express";

import { CreateAdController } from "../../../../modules/ads/useCases/createAd/CreateAdController";
import { FindDiscordController } from "../../../../modules/ads/useCases/findDiscord/FindDiscordController";

const adsRoutes = Router();

const createAdController = new CreateAdController();
const findDiscordController = new FindDiscordController();

adsRoutes.post("/ads/:id", createAdController.handle);
adsRoutes.get("/ads/:id/discord", findDiscordController.handle);

export { adsRoutes };
