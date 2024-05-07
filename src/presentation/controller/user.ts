import { Context } from "hono";
import { FindUserById } from "../../application/findUserById";
import { transformUserDto } from "../dto/user";

export class UserController {
  private readonly findUserById: FindUserById;

  constructor(findUserById: FindUserById) {
    this.findUserById = findUserById;
  }

  find(c: Context): Response | Promise<Response> {
    const id = Number(c.req.param("id"));
    const user = this.findUserById.exec(id);

    if (!user) {
      return c.notFound();
    }

    return c.json(transformUserDto(user));
  }
}
