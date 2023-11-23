class ErrorResponseDto {
  constructor(public message: string) {}
}

export class SomethingWentWrongResponseDto extends ErrorResponseDto {
  constructor() {
    super("Something went wrong");
  }
}
export class NotFoundResponseDto extends ErrorResponseDto {
  constructor(resource = "Resource") {
    super(resource.concat(" not found"));
  }
}
