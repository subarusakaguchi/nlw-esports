import { injectable, inject } from "tsyringe";

import { IHourConvertProvider } from "../../../../shared/infra/container/Providers/HourConvertionProvider/IHourConvertProvider";
import { IGamesRepository } from "../../repositories/interfaces/IGamesRepository";

interface IAdFormattedResponse {
  id: string;
  name: string;
  weekDays: string[];
  useVoiceChannel: boolean;
  yearsPlaying: number;
  hourStart: string;
  hourEnd: string;
}

@injectable()
class ListGameAdsUseCase {
  constructor(
    @inject("SqliteGamesRepository")
    private gamesRepository: IGamesRepository,
    @inject("HourConvertProvider")
    private hourConvertProvider: IHourConvertProvider
  ) {}
  async execute(gameId: string): Promise<IAdFormattedResponse[]> {
    const gameAdsExists = await this.gamesRepository.listGameAds(gameId);

    if (!gameAdsExists.gameAds) {
      throw new Error("Ads not found");
    }

    const adsFilter = gameAdsExists.gameAds.Ads.map((adItem) => {
      return {
        ...adItem,
        weekDays: adItem.weekDays.split(","),
        hourStart: this.hourConvertProvider.convertMinutesToHourString(
          adItem.hourStart
        ),
        hourEnd: this.hourConvertProvider.convertMinutesToHourString(
          adItem.hourEnd
        ),
      };
    });

    const adsReturn = adsFilter.map((adItem) => {
      return { ...adItem, weekDays: adItem.weekDays.map((day) => day.trim()) };
    });

    return adsReturn;
  }
}

export { ListGameAdsUseCase };
