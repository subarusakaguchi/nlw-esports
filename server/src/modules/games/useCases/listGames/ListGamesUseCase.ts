import { injectable, inject } from "tsyringe";

import { IGamesRepository } from "../../repositories/interfaces/IGamesRepository";

@injectable()
class ListGamesUseCase {
  constructor(
    @inject("SqliteGamesRepository") private gamesRepository: IGamesRepository
  ) {}
  async execute() {
    const allGames = await this.gamesRepository.listAll();

    return allGames;
  }
}

export { ListGamesUseCase };
