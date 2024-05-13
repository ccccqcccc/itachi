import { User } from "@domain";
import { UserDto } from "../dto";
import { transformId } from "./id";
import { transformPostDto } from "./post";

export const transformUserDto = (user: User): UserDto => {
  return {
    id: transformId(user.id),
    posts: user.posts.map((post) => transformPostDto(post)),
  };
};
