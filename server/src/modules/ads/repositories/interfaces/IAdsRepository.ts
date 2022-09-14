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
  create(data: ICreateAdsDTO): any;
}

export { IAdsRepository, ICreateAdsDTO };
