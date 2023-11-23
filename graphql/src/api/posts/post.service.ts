import { Service } from "typedi";
import { PostModel } from "./post.model";
import { PostRepository } from "./post.repository";
import { NotFoundResponseDto } from "../../common/response.dto";
import { GraphQLError } from "graphql";
import { NotFoundError } from "../../common/api.error";

export class PostService {
  constructor(private postRepo: PostRepository) {}
  async findOnePost(postId: number) {
    const post = this.postRepo.findOnePost(postId);
    if (!post) {
      throw new NotFoundError("Post");
    }
    return new PostModel({
      id: post.id,
    });
  }

  async findManyPosts() {
    return this.postRepo.findManyPosts();
  }
}
