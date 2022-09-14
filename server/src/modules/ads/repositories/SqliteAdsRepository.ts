import { PrismaClient } from "@prisma/client";

import { IAdsRepository, ICreateAdsDTO } from "./interfaces/IAdsRepository";

const prisma = new PrismaClient();

class SqliteAdsRepository implements IAdsRepository {
  async create(data: ICreateAdsDTO) {
    const newAd = await prisma.ad.create({
      data,
    });

    return newAd;
  }
}

export { SqliteAdsRepository };
