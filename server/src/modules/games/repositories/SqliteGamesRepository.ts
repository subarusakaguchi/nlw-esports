import { Game, PrismaClient } from "@prisma/client";

import {
  IGameAdsResponse,
  IGamesRepository,
} from "./interfaces/IGamesRepository";

const prisma = new PrismaClient();

class SqliteGamesRepository implements IGamesRepository {
  async listAll(): Promise<Game[]> {
    const games = await prisma.game.findMany({
      include: {
        _count: {
          select: {
            Ads: true,
          },
        },
      },
    });

    return games;
  }

  async listGameAds(gameId: string): Promise<IGameAdsResponse> {
    const gameAds = await prisma.game.findFirst({
      where: {
        id: gameId,
      },
      include: {
        Ads: {
          where: {
            gameId,
          },
          select: {
            id: true,
            name: true,
            weekDays: true,
            useVoiceChannel: true,
            yearsPlaying: true,
            hourStart: true,
            hourEnd: true,
          },
          orderBy: {
            created_at: "asc",
          },
        },
      },
    });

    return { gameAds };
  }
}

export { SqliteGamesRepository };
