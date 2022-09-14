import { Ad } from "@prisma/client";

interface ICreateAdsDTO {
  gameId: string;
  name: string;
  yearsPlaying: number;
  discord: string;
  weekDays: string;
  hourStart: number;
  hourEnd: number;
  useVoiceChannel: boolean;
}

interface IAdsRepository {
  create(data: ICreateAdsDTO): Promise<Ad>;
  findByDiscord(discord: string): Promise<Ad[]>;
  findDiscordByAdId(adId: string): Promise<{ discord: string } | null>;
}

export { IAdsRepository, ICreateAdsDTO };
