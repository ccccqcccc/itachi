import { Hono } from "hono";

import { App } from "../../app";
import { transformUserDto } from "./transform";
import { validateFindOneParam } from "./validator";

const app = new App();
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
