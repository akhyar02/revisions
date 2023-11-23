import { PostService } from "./post.service";
import { PostModel } from "./post.model";

export class PostResolver {
  constructor(private postService: PostService) {}

  getResolver() {
    return {
      Query: {
        post: (_: any, args: any) => {
          return this.post(Number(args.id));
        },
        posts: () => this.posts(),
      },
    };
  }

  private async post(id: number): Promise<PostModel> {
    return await this.postService.findOnePost(id);
  }

  private async posts(): Promise<PostModel[]> {
    return await this.postService.findManyPosts();
  }
}
