import StringSchema from './StringSchema';
import NumberSchema from './NumberSchema';
import ArraySchema from './ArraySchema';
import ObjectSchema from './ObjectSchema';

class Validator {
  addValidator(type, name, fn) {
    switch (type) {
      case 'string':
        StringSchema.customValidators[name] = fn;
        break;
      case 'number':
        NumberSchema.customValidators[name] = fn;
        break;
      case 'array':
        ArraySchema.customValidators[name] = fn;
        break;
      case 'object':
        ObjectSchema.customValidators[name] = fn;
        break;
      default:
        throw new Error('Unsupported validator type.');
    }

    return this;
  }

  string() {
    return new StringSchema(this);
  }

  number() {
    return new NumberSchema(this);
  }

  array() {
    return new ArraySchema(this);
  }

  object() {
    return new ObjectSchema(this);
  }
}

export default Validator;
