export const contains = (string) => (value) => value.includes(string);

export const required = () => (value) => value !== null && value !== undefined && value !== '';

export const positive = () => (value) => value > 0 || value === null;

export const range = (start, end) => (value) => value >= start && value <= end;

export const sizeof = (size) => (value) => value.length === size;

export const shape = (validationShape) => (value) => Object.entries(value)
  .every(([k, v]) => validationShape[k].isValid(v));
