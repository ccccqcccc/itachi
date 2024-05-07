import { Post } from "../../domain/model/post";
import { User } from "../../domain/model/user";
import { PostDto, UserDto } from "./dto";

const transformId = (id: number | undefined): string => (id ? id.toString() : "");

export const transformPostDto = (post: Post): PostDto => {
  return { id: transformId(post.id), name: post.name, status: post.status.toString() };
};

export const transformUserDto = (user: User): UserDto => {
  const posts: PostDto[] = user.posts.map((post) => transformPostDto(post));

  return { id: transformId(user.id), posts };
};
