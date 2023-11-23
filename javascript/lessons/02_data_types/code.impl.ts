import { log } from "utils/logger";

interface User {
  id: number;
  name: string;
}

interface Car {
  id: number;
  model: string;
  ownerId: number;
}

class NotFoundError extends Error {
  constructor(message = "Not found") {
    super(message);
    this.name = "NotFoundError";
  }
}

class InvalidIdError extends Error {
  constructor(message = "Invalid ID") {
    super(message);
    this.name = "InvalidIdError";
  }
}

class UserNotFoundError extends NotFoundError {
  constructor(message = "User not found") {
    super(message);
    this.name = "UserNotFoundError";
  }
}

class CarNotFoundError extends NotFoundError {
  constructor(message = "Car not found") {
    super(message);
    this.name = "CarNotFoundError";
  }
}

const mockDb: {
  users: User[];
  cars: Car[];
} = {
  users: [
    { id: 1, name: "John" },
    { id: 2, name: "Jane" },
  ],
  cars: [
    { id: 1, model: "Proton X70", ownerId: 1 },
    { id: 2, model: "Proton X50", ownerId: 2 },
  ],
};

interface IRepository<T> {
  findOne(id: number): T;
  findMany(search: string | number): T[];
}

class UserRepo implements IRepository<User> {
  constructor(private db: typeof mockDb) {}

  findOne(id: number): User {
    if (id < 0) {
      throw new InvalidIdError("Invalid ID");
    }
    const user = this.db.users.find((user) => user.id === id);
    if (!user) {
      throw new UserNotFoundError();
    }
    return user;
  }

  findMany(name: string): User[] {
    return this.db.users.filter((user) => user.name.includes(name));
  }
}

class CarRepo implements IRepository<Car> {
  constructor(private db: typeof mockDb) {}

  findOne(id: number): Car {
    if (id < 0) {
      throw new InvalidIdError();
    }
    const car = this.db.cars.find((car) => car.id === id);
    if (!car) {
      throw new CarNotFoundError();
    }
    return car;
  }

  findMany(model: string): Car[] {
    return this.db.cars.filter((car) => car.model.includes(model));
  }
}

const userRepo = new UserRepo(mockDb);
const carRepo = new CarRepo(mockDb);

try {
  const user = userRepo.findOne(3);
  const car = carRepo.findOne(1);
  const users = userRepo.findMany("J");
  const cars = carRepo.findMany("X");
  log(user, car);
  log(users, cars);
} catch (error) {
  log(error);
}
