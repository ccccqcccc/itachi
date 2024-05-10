import { Dto } from "../dto";

// T: response type, U: request params type
export interface Usecase<T extends Dto | Dto[] | null | void, U> {
  exec(params?: U): T;
}
