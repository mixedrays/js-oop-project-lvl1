export default class BaseSchema {
  constructor() {
    this.validators = {};
  }

  addValidator(name, fn) {
    this.validators[name] = fn;
  }

  test(validatorName, ...args) {
    const customValidator = BaseSchema.customValidators[validatorName];
    this.addValidator(validatorName, (value) => customValidator(value, ...args));

    return this;
  }

  isValid(value) {
    if (value === null || value === undefined) {
      return false;
    }

    return Object.values(this.validators).every((fn) => fn(value));
  }
}

BaseSchema.customValidators = {};
