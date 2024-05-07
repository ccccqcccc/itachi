import { User } from "../domain/model/user";

export type UserDto = {
  id: number;
};

export const transformUserDto = (user: User): UserDto => {
  return { id: user.id };
};
