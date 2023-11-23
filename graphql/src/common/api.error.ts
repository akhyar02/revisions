import { NotFoundResponseDto } from "./response.dto";

export class HttpError extends Error {
  constructor(message = "Something went wrong", public statusCode = 500) {
    super(message);
  }
  toResponse() {
    return {
      message: "Something went wrong",
    };
  }
}

export class NotFoundError extends HttpError {
  constructor(public resource = "Resource", statusCode = 404) {
    super(resource.concat(" not found"), statusCode);
    this.statusCode = statusCode;
  }

  toResponse() {
    return new NotFoundResponseDto(this.resource);
  }
}
