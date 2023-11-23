import { UserService } from "./user.service";
import { Arg, Query, Resolver } from "type-graphql";
import { UserModel } from "./user.model";
import { Service } from "typedi";

@Service()
@Resolver()
export class UserResolver {
  constructor(private userService: UserService) {}

  @Query(() => UserModel)
  async findOneUser(@Arg("id") id: number): Promise<UserModel> {
    return await this.userService.findOneUser(id);
  }

  @Query(() => [UserModel])
  async findManyUsers(): Promise<UserModel[]> {
    return await this.userService.findManyUsers();
  }
}
