// T: response type, U: request params type
export interface Usecase<T, U> {
  exec(params?: U): T;
}
