import * as http from "http";
import { UserController } from "./modules/user/user.controller";
import { UserService } from "./modules/user/user.service";
import { mockDb, UserRepo } from "./modules/user/user.repo";

const server = http.createServer();

const dbClient = mockDb;

const userRepo = new UserRepo(dbClient);
const userService = new UserService(userRepo);
const userController = new UserController(userService);

server.on("request", (req, res) => {
  userController.handleRoutes(req, res);
});

server.listen(1337);
