import { Dto } from "./dto";
import { PostDto } from "./post";

export interface UserDto extends Dto {
  id: string;
  posts: PostDto[];
}
