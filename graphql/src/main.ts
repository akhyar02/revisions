import "reflect-metadata";
import { ConfigService } from "./common/config.service";
import { Server } from "./api/server";
import { LoggerService } from "./common/logger.service";

async function main() {
  const configService = await ConfigService.create();
  const loggerService = new LoggerService();

  const server = new Server(loggerService);

  server.listen(configService.get("PORT"));
}

main();
