import { container } from "tsyringe";

import { IAdsRepository } from "../../../modules/ads/repositories/interfaces/IAdsRepository";
import { SqliteAdsRepository } from "../../../modules/ads/repositories/SqliteAdsRepository";

container.registerSingleton<IAdsRepository>(
  "AdsRepository",
  SqliteAdsRepository
);
