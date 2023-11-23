import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { HttpError } from "../common/api.error";
import { GraphQLError } from "graphql";
import { userTypeDef } from "./users/user.typedef";
import { postTypeDef } from "./posts/post.typedef";
import { PostResolver } from "./posts/post.resolver";
import { PostService } from "./posts/post.service";
import { PostRepository } from "./posts/post.repository";
import { DatabaseService } from "../common/database.service";
import { LoggerService } from "../common/logger.service";

export class Server {
  constructor(private logger: LoggerService) {}

  async listen(port: number | string) {
    const postResolver = new PostResolver(
      new PostService(new PostRepository(new DatabaseService()))
    ).getResolver();

    const server = new ApolloServer({
      resolvers: [postResolver],
      typeDefs: [userTypeDef, postTypeDef],
      formatError: (_, err) => {
        this.logger?.log(err);
        if (err instanceof GraphQLError) {
          if (err.originalError instanceof HttpError) {
            return err.originalError.toResponse();
          }
        }

        return {
          message: "Something went wrong",
        };
      },
    });
    try {
      startStandaloneServer(server, {
        listen: {
          port: Number(port),
        },
      });
    } catch (error) {
      server.stop();
    }
  }
}
