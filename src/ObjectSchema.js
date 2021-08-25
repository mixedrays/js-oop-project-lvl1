import BaseSchema from './BaseSchema';
import { shape } from './validators';

export default class ObjectSchema extends BaseSchema {
  shape(validationShape) {
    this.addValidator('shape', shape(validationShape));
    return this;
  }

  isValid(value) {
    if (!this.validators.required && (value === null)) {
      return true;
    }

    return super.isValid(value);
  }
}
