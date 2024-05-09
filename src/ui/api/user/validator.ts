import { z } from "zod";

import { Validator, datetime, integer } from "../validator";

export class UserValidator {
  private readonly validator = new Validator();

  validateFindQuery = this.validator.validateQuery(
    z.object({
      limit: integer.optional(),
      offset: integer.optional(),
      from: datetime.optional(),
      to: datetime.optional(),
    })
  );

  validateFindOneParam = this.validator.validateParam(
    z.object({
      id: integer,
    })
  );
}
