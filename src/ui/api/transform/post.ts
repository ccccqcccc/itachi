import { Post } from "../../../domain/model/post";
import { PostDto } from "../dto/post";
import { transformId } from "./id";

export const transformPostDto = (post: Post): PostDto => {
  return { id: transformId(post.id), name: post.name, status: post.status.toString() };
};
