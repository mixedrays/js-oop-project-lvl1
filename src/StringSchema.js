import BaseSchema from './BaseSchema';
import { contains, required, range } from './validators';

export default class StringSchema extends BaseSchema {
  required() {
    this.addValidator('required', required());
    return this;
  }

  contains(string) {
    this.addValidator('contains', contains(string));
    return this;
  }

  range(start, end) {
    this.addValidator('range', range(start, end));
    return this;
  }
}
