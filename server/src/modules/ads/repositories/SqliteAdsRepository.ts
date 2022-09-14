import { PrismaClient, Ad } from "@prisma/client";

import { IAdsRepository, ICreateAdsDTO } from "./interfaces/IAdsRepository";

const prisma = new PrismaClient();

class SqliteAdsRepository implements IAdsRepository {
  async create(data: ICreateAdsDTO): Promise<Ad> {
    const newAd = await prisma.ad.create({
      data,
    });

    return newAd;
  }

  async findByDiscord(discord: string): Promise<Ad[]> {
    const ad = await prisma.ad.findMany({
      where: {
        discord,
      },
    });

    return ad;
  }

  async findDiscordByAdId(adId: string): Promise<{ discord: string } | null> {
    const discord = await prisma.ad.findUnique({
      where: {
        id: adId,
      },
      select: {
        discord: true,
      },
    });

    return discord;
  }
}

export { SqliteAdsRepository };
