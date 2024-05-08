import { PostDto } from "./post";

export type UserDto = {
  id: string;
  posts: PostDto[];
};
