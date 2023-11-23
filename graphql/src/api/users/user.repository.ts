import { Service } from "typedi";
import { DatabaseService } from "../../common/database.service";

@Service()
export class UserRepository {
  constructor(private db: DatabaseService) {}

  async findOneUser(id: number) {
    return this.db.data.users.find((u) => u.id === id);
  }
}
