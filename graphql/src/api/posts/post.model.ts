import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class PostModel {
  @Field()
  id!: number;

  constructor(arg: PostModel) {
    Object.assign(this, arg);
  }
}
