import { Post } from "@domain/model";
import { PostDto } from "../dto";
import { transformId } from "./id";

export const transformPostDto = (post: Post): PostDto => {
  return {
    id: transformId(post.id),
    name: post.name,
    status: post.status,
  };
};
