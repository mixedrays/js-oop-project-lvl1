import BaseSchema from './BaseSchema';
import { positive, required, range } from './validators';

export default class NumberSchema extends BaseSchema {
  required() {
    this.addValidator('required', required());
    return this;
  }

  positive() {
    this.addValidator('positive', positive());
    return this;
  }

  range(start, end) {
    this.addValidator('range', range(start, end));
    return this;
  }

  isValid(value) {
    if (!this.validators.required && (value === null || value === undefined)) {
      return true;
    }

    return super.isValid(value);
  }
}
