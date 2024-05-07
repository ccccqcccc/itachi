import { z } from "zod";
import { zValidator } from "@hono/zod-validator";

export const validateFindOneParam = zValidator("param", z.object({ id: z.string() }));
