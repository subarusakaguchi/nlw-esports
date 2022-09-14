import { injectable, inject } from "tsyringe";

import {
  IAdsRepository,
  ICreateAdsDTO,
} from "../../repositories/interfaces/IAdsRepository";

@injectable()
class CreateAdUseCase {
  constructor(
    @inject("SqliteAdsRepository") private adsRepository: IAdsRepository
  ) {}

  async execute(data: ICreateAdsDTO) {
    const adExists = await this.adsRepository.findByDiscord(data.discord);

    if (adExists[0]) {
      const discordAdMatch = adExists.filter((ad) => {
        return ad.gameId === data.gameId;
      });

      if (discordAdMatch) {
        throw new Error("Discord id already has an ad for this game");
      }
    }

    const newAd = await this.adsRepository.create(data);

    return newAd;
  }
}

export { CreateAdUseCase };
