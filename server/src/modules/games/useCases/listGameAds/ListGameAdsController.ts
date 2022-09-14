import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListGameAdsUseCase } from "./LitsGameAdsUseCase";

class ListGameAdsController {
  async handle(req: Request, res: Response) {
    const { id: gameId } = req.params;

    const listGamesUseCase = container.resolve(ListGameAdsUseCase);

    const gameAds = await listGamesUseCase.execute(gameId);

    return res.send(gameAds);
  }
}

export { ListGameAdsController };
