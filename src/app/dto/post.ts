import { Dto } from "./dto";

export interface PostDto extends Dto {
  id: string;
  name: string;
  status: string;
}
