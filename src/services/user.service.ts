import { User } from '../interfaces';
import { userRepo } from '../repositories';
import { logger } from '../utils';

class UserService {
  private readonly repo = userRepo;

  async createUser(user: User): Promise<User> {
    try {
      return await this.repo.createUser(user);
    } catch (error: unknown) {
      logger.error(error);
      throw error;
    }
  }
}

export { UserService };
