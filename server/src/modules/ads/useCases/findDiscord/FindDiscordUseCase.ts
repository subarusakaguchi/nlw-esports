import { injectable, inject } from "tsyringe";

import { IAdsRepository } from "../../repositories/interfaces/IAdsRepository";

@injectable()
class FindDiscordUseCase {
  constructor(
    @inject("SqliteAdsRepository") private adsRepository: IAdsRepository
  ) {}

  async execute(adId: string): Promise<{ discord: string }> {
    const adExists = await this.adsRepository.findDiscordByAdId(adId);

    if (!adExists) {
      throw new Error("Ad not found");
    }

    return adExists;
  }
}

export { FindDiscordUseCase };
