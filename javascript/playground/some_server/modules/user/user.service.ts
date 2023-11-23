import { UserRepo } from "./user.repo";

export class UserService {
  constructor(private userRepo: UserRepo) {}
  async findMany(search?: string) {
    return await this.userRepo.findMany(search);
  }
  async create(name: string) {
    return this.userRepo.create(name);
  }
}
