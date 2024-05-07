import { Hono } from "hono";

import { App } from "../application/app";
import { UserRepositoryDatastore } from "../infrastructure/repository/user";
import { transformUserDto } from "./dto";
import { validateFindOneParam } from "./validator";

const userRepository = new UserRepositoryDatastore();

const app = new App(userRepository);

const api = new Hono();

api.get("/users/:id", validateFindOneParam, (c) => {
  const { id } = c.req.valid("param");
  const user = app.findOneUserById.exec({ id: Number(id) });

  if (!user) {
    return c.notFound();
  }

  return c.json(transformUserDto(user));
});

export { api };
