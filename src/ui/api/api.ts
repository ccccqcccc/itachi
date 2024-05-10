import { Hono } from "hono";
import { createFactory } from "hono/factory";

import { App } from "@app";
import { UserController } from "./user";
import { Ui } from "../ui";

export class Api implements Ui {
  private readonly port: number;
  private readonly app: App;
  private readonly api = new Hono();
  private readonly factory = createFactory();

  constructor(port: number, app: App) {
    this.port = port;
    this.app = app;
  }

  exec() {
    const userController = new UserController(this.app, this.factory);

    this.api.get("/users/:id", ...userController.findOne());

    Bun.serve({ port: this.port, fetch: (req) => this.api.fetch(req) });
  }
}
