import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateAdUseCase } from "./CreateAdUseCase";

class CreateAdController {
  async handle(req: Request, res: Response): Promise<Response> {
    const {
      gameId,
      name,
      yearsPlaying,
      discord,
      weekDays,
      hourStart,
      hourEnd,
      useVoiceChannel,
    } = req.body;

    const createAdUseCase = container.resolve(CreateAdUseCase);

    const newAd = await createAdUseCase.execute({
      gameId,
      name,
      yearsPlaying,
      discord,
      weekDays,
      hourStart,
      hourEnd,
      useVoiceChannel,
    });

    return res.status(201).json(newAd);
  }
}

export { CreateAdController };
