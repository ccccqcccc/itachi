import { User } from "../../domain/model/user";

type UserDto = {
  id: number;
};

export const transformUserDto = (user: User): UserDto => {
  return { id: user.id };
};
