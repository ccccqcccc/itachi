export type PostDto = {
  id: string;
  name: string;
  status: string;
};

export type UserDto = {
  id: string;
  posts: PostDto[];
};
