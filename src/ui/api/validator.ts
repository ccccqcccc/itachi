import { z } from "zod";
import { validator } from "hono/validator";

type Target = "param" | "query" | "json" | "header";

export class Validator {
  validateQuery(schema: z.ZodType) {
    return this.validate("query", schema);
  }

  validateParam(schema: z.ZodType) {
    return this.validate("param", schema);
  }

  validateJson(schema: z.ZodType) {
    return this.validate("json", schema);
  }

  validateHeader(schema: z.ZodType) {
    return this.validate("json", schema);
  }

  private validate(target: Target, schema: z.ZodType) {
    return validator(target, (value, c) => {
      const parsed = schema.safeParse(value);

      if (!parsed.success) {
        return c.text("Invalid!", 401);
      }

      return parsed.data;
    });
  }
}
