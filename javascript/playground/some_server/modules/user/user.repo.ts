export const mockDb = {
  users: [{
    id: 1,
    name: "john",
  }],
};

export class UserRepo {
  constructor(private db: typeof mockDb) {}

  async findMany(search?: string, db = this.db) {
    return search ? db.users.filter((u) => u.name.includes(search)) : db.users;
  }

  async create(name: string, db = this.db) {
    db.users.push({
      name,
      id: db.users.length,
    });
  }
}
