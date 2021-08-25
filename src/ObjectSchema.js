import BaseSchema from './BaseSchema';
import { shape } from './validators';

export default class ObjectSchema extends BaseSchema {
  shape(validationShape) {
    this.addValidator('shape', shape(validationShape));
    return this;
  }
}
