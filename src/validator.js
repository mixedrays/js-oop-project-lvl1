class Validator {
  string() { // eslint-disable-line
    return {
      isRequired: false,
      containedValue: '',

      required(flag = true) {
        this.isRequired = flag;
        return this;
      },

      contains(value) {
        this.containedValue = value;
        return this;
      },

      isValid(value) {
        if (value === null) {
          return false;
        }

        if (this.isRequired && !value) {
          return false;
        }

        if (this.containedValue) {
          return value.includes(this.containedValue);
        }

        return true;
      },
    };
  }

  number() { // eslint-disable-line
    return {
      isRequired: false,
      isPositive: false,
      start: null,
      end: null,

      required(flag = true) {
        this.isRequired = flag;
        return this;
      },

      positive(flag = true) {
        this.isPositive = flag;
        return this;
      },

      range(start, end) {
        this.start = start;
        this.end = end;
        return this;
      },

      isValid(value) {
        if (this.isRequired && !value) {
          return false;
        }

        if (this.isPositive && value < 0) {
          return false;
        }

        if (this.start !== null && this.end !== null && (value < this.start || value > this.end)) {
          return false;
        }

        return true;
      },
    };
  }

  array() { // eslint-disable-line
    return {
      isRequired: false,
      size: undefined,

      required(flag = true) {
        this.isRequired = flag;
        return this;
      },

      sizeof(size) {
        this.size = size;
        return this;
      },

      isValid(value) {
        if (!value || !Array.isArray(value)) {
          return false;
        }

        if (this.isRequired && !value) {
          return false;
        }

        if (this.size !== undefined && this.size !== value.length) {
          return false;
        }

        return true;
      },
    };
  }

  object() { // eslint-disable-line
    return {
      isRequired: false,
      valueShape: null,

      shape(shape) {
        this.valueShape = shape;
        return this;
      },

      isValid(value) {
        if (this.valueShape) {
          const validations = Object.entries(value)
            .map(([k, v]) => this.valueShape[k].isValid(v))
            .filter((v) => !v);

          return validations.length === 0;
        }

        return true;
      },
    };
  }
}

export default Validator;
