import BaseSchema from './BaseSchema';
import { sizeof } from './validators';

export default class ArraySchema extends BaseSchema {
  required() {
    this.addValidator('required', Array.isArray);
    return this;
  }

  sizeof(size) {
    this.addValidator('size', sizeof(size));
    return this;
  }
}
