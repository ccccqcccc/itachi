import { Factory } from "hono/factory";

import { App } from "../../../app";
import { UserValidator } from "./validator";

export class UserController {
  private readonly app: App;
  private readonly factory: Factory;
  private readonly validator = new UserValidator();

  constructor(app: App, factory: Factory) {
    this.app = app;
    this.factory = factory;
  }

  find() {
    return this.factory.createHandlers(this.validator.validateFindQuery, (c) => {
      const { limit, offset, from, to } = c.req.valid("query");
      const users = this.app.findUsers.exec({ limit, offset, from, to });

      return c.json(users);
    });
  }

  findOne() {
    return this.factory.createHandlers(this.validator.validateFindOneParam, (c) => {
      const { id } = c.req.valid("param");
      const user = this.app.findOneUserById.exec({ id });

      if (!user) {
        return c.notFound();
      }

      return c.json(user);
    });
  }
}
