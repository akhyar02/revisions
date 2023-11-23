import { Service } from "typedi";
import { UserModel } from "./user.model";
import { UserRepository } from "./user.repository";
import { NotFoundError } from "../../common/api.error";

@Service()
export class UserService {
  constructor(private userRepo: UserRepository) {}

  async findOneUser(id: number) {
    const user = await this.userRepo.findOneUser(id);

    if (!user) {
      throw new NotFoundError("User");
    }

    return new UserModel({
      email: user.email,
      username: user.username,
    });
  }

  async findManyUsers() {
    return [new UserModel({ username: "john", email: "john@mail.com" })];
  }
}
