import { injectable, inject } from "tsyringe";

import {
  IAdsRepository,
  ICreateAdsDTO,
} from "../../repositories/interfaces/IAdsRepository";

@injectable()
class CreateAdUseCase {
  constructor(@inject("AdsRepository") private adsRepository: IAdsRepository) {}

  async execute(data: ICreateAdsDTO) {
    const newAd = await this.adsRepository.create(data);

    return newAd;
  }
}

export { CreateAdUseCase };
