import { Router } from "express";

import { CreateAdController } from "../../../../modules/ads/useCases/createAd/CreateAdController";

const adsRoutes = Router();

const createAdController = new CreateAdController();

adsRoutes.post("/ads", createAdController.handle);

export { adsRoutes };
