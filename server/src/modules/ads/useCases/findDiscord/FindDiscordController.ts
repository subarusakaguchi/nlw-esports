import { Request, Response } from "express";
import { container } from "tsyringe";

import { FindDiscordUseCase } from "./FindDiscordUseCase";

class FindDiscordController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { id: adId } = req.params;

    const createAdUseCase = container.resolve(FindDiscordUseCase);

    const newAd = await createAdUseCase.execute(adId);

    return res.json(newAd);
  }
}

export { FindDiscordController };
