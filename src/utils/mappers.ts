import { ValidationError } from 'class-validator';

export const mapperClassValidationErrorToAppException = (
  errors: ValidationError[],
) => {
  const errorList: Record<string, string> = {};

  for (const error of errors) {
    errorList[error.property] = Object.values(error.constraints ?? {})[0];
  }

  return errorList;
};
