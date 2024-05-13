import { z } from "zod";

import { Validator } from "../validator";

export class UserValidator {
  private readonly validator = new Validator();

  validateFindQuery = this.validator.validateQuery(
    z.object({
      limit: z.coerce.number().int().min(0).optional(),
      offset: z.coerce.number().int().min(0).optional(),
      from: z.string().datetime({ offset: false }).optional(),
      to: z.string().datetime({ offset: false }).optional(),
    })
  );

  validateFindOneParam = this.validator.validateParam(
    z.object({
      id: z.coerce.number().int().min(0),
    })
  );
}
