type Env = {
  BASE_URL: string;
  PORT: string;
};
export class ConfigService {
  private env!: Env;
  private constructor() {}

  static async create() {
    const service = new ConfigService();
    await service.init();
    return service;
  }

  private async init() {
    const dotenv = await import("dotenv");
    const config = dotenv.config();

    if (config.error) {
      throw config.error;
    }

    const env = config.parsed as Env;

    if (!env.BASE_URL) {
      throw new Error("BASE_URL is not defined in .env file");
    }

    if (!env.PORT) {
      throw new Error("PORT is not defined in .env file");
    }

    this.env = env;
  }

  get(key: keyof Env) {
    return this.env[key];
  }
}
