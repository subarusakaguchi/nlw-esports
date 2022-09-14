import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListGamesUseCase } from "./ListGamesUseCase";

class ListGamesController {
  async handle(req: Request, res: Response) {
    const listGamesUseCase = container.resolve(ListGamesUseCase);

    const allGames = await listGamesUseCase.execute();

    return res.send(allGames);
  }
}

export { ListGamesController };
