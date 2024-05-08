import { Factory } from "hono/factory";
import { validateFindOneParam } from "../validator/query";
import { App } from "../../../app";

export class UserController {
  private readonly app: App;
  private readonly factory: Factory;

  constructor(app: App, factory: Factory) {
    this.app = app;
    this.factory = factory;
  }

  findOne() {
    return this.factory.createHandlers(validateFindOneParam, (c) => {
      const { id } = c.req.valid("param");
      const user = this.app.findOneUserById.exec({ id: Number(id) });

      if (!user) {
        return c.notFound();
      }

      return c.json(user);
    });
  }
}
