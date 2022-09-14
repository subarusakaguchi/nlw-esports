import { injectable, inject } from "tsyringe";

import { IHourConvertProvider } from "../../../../shared/infra/container/Providers/HourConvertionProvider/IHourConvertProvider";
import { IAdsRepository } from "../../repositories/interfaces/IAdsRepository";

interface ICreateAdReqDTO {
  gameId: string;
  name: string;
  yearsPlaying: number;
  discord: string;
  weekDays: string[];
  hourStart: string;
  hourEnd: string;
  useVoiceChannel: boolean;
}

@injectable()
class CreateAdUseCase {
  constructor(
    @inject("SqliteAdsRepository")
    private adsRepository: IAdsRepository,
    @inject("HourConvertProvider")
    private hourConvertProvider: IHourConvertProvider
  ) {}

  async execute(data: ICreateAdReqDTO) {
    const adExists = await this.adsRepository.findByDiscord(data.discord);

    if (adExists[0]) {
      const discordAdMatch = adExists.filter((ad) => {
        return ad.gameId === data.gameId;
      });

      if (discordAdMatch) {
        throw new Error("Discord id already has an ad for this game");
      }
    }

    const formattedWeekDays = data.weekDays.join(",");
    const formattedHourStart =
      this.hourConvertProvider.convertHourStringToMinutes(data.hourStart);
    const formattedHourEnd =
      this.hourConvertProvider.convertHourStringToMinutes(data.hourEnd);

    const { discord, gameId, name, useVoiceChannel, yearsPlaying } = data;

    const newAd = await this.adsRepository.create({
      gameId,
      weekDays: formattedWeekDays,
      hourEnd: formattedHourEnd,
      hourStart: formattedHourStart,
      discord,
      name,
      useVoiceChannel,
      yearsPlaying,
    });

    return newAd;
  }
}

export { CreateAdUseCase };
