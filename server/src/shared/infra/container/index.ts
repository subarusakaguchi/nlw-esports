import { container } from "tsyringe";
import "./Providers";

import { IAdsRepository } from "../../../modules/ads/repositories/interfaces/IAdsRepository";
import { SqliteAdsRepository } from "../../../modules/ads/repositories/SqliteAdsRepository";
import { IGamesRepository } from "../../../modules/games/repositories/interfaces/IGamesRepository";
import { SqliteGamesRepository } from "../../../modules/games/repositories/SqliteGamesRepository";

container.registerSingleton<IAdsRepository>(
  "SqliteAdsRepository",
  SqliteAdsRepository
);

container.registerSingleton<IGamesRepository>(
  "SqliteGamesRepository",
  SqliteGamesRepository
);
