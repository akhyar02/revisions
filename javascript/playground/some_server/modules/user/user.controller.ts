import * as http from "http";
import { UserService } from "./user.service";

export class UserController {
  constructor(private service: UserService) {}

  async handleRoutes(req: http.IncomingMessage, res: http.ServerResponse) {
    if (!req.url) {
      return true;
    }

    const url = new URL(req.url, `http://${req.headers.host}`);
    switch (url.pathname) {
      case "/users":
        switch (req.method) {
          case "GET": {
            const name = url.searchParams.get("name");

            const users = await this.service.findMany(name ?? undefined);

            res.setHeader("Content-Type", "application/json");
            res.write(JSON.stringify(users));
            res.end();
            break;
          }
          case "POST": {
            let data = "";
            req.on("data", (chunk) => {
              data += chunk;
            });

            req.on("end", async () => {
              const { name } = JSON.parse(data || "{}");
              const id = await this.service.create(name);

              res.setHeader("Content-Type", "application/json");

              res.write(
                JSON.stringify({
                  id,
                })
              );
              res.end();
            });
            break;
          }
        }
        return true;
      default:
        return false;
    }
  }
}
