import { Post } from "../../../domain/model/post";
import { User } from "../../../domain/model/user";
import { PostDto } from "../dto/post";
import { UserDto } from "../dto/user";
import { transformId } from "./id";
import { transformPostDto } from "./post";

export const transformUserDto = (user: User): UserDto => {
  const posts: PostDto[] = user.posts.map((post) => transformPostDto(post));

  return { id: transformId(user.id), posts };
};
