import { Game } from "@prisma/client";

interface IAdResponse {
  id: string;
  name: string;
  weekDays: string;
  useVoiceChannel: boolean;
  yearsPlaying: number;
  hourStart: number;
  hourEnd: number;
}

interface IGameAdsResponse {
  gameAds: (Game & { Ads: IAdResponse[] }) | null;
}

interface IGamesRepository {
  listAll(): Promise<Game[]>;
  listGameAds(gameId: string): Promise<IGameAdsResponse>;
}

export { IGamesRepository, IGameAdsResponse };
