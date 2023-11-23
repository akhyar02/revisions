import { Service } from "typedi";
import { DatabaseService } from "../../common/database.service";

@Service()
export class PostRepository {
  constructor(private db: DatabaseService) {}

  findOnePost(id: number) {
    return this.db.data.posts.find((p) => p.id === id);
  }

  findManyPosts() {
    return this.db.data.posts;
  }
}
