class Validator {
  string() { // eslint-disable-line
    return {
      isRequired: false,
      containedValue: '',

      required(flag = true) {
        this.isRequired = flag;
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
}

export default Validator;
