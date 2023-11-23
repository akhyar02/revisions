import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class UserModel {
  @Field(() => String)
  username!: string;
  @Field(() => String)
  email!: string;

  constructor(arg: UserModel) {
    Object.assign(this, arg);
  }
}
