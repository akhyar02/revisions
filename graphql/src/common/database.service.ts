import { Service } from "typedi";

@Service()
export class DatabaseService {
  constructor() {}
  data = {
    users: [{ id: 1, username: "test", email: "kai" }],
    posts: [{ id: 1 }],
  };
}
