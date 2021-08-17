import {
  beforeEach, describe, it, expect,
} from '@jest/globals';
import Validator from './validator';

describe('Validator array() schema', () => {
  let schema;

  beforeEach(() => {
    const v = new Validator();
    schema = v.array();
  });

  it('checks schema for null', () => {
    expect(schema.isValid(null)).toBeFalsy();
  });

  it('checks schema for undefined', () => {
    expect(schema.isValid()).toBeFalsy();
  });

  it('checks schema for required', () => {
    schema.required();
    expect(schema.isValid()).toBeFalsy();
    expect(schema.isValid([])).toBeTruthy();
    expect(schema.isValid(['hexlet'])).toBeTruthy();
  });

  it('checks schema for size', () => {
    schema.required().sizeof(2);
    expect(schema.isValid(['hexlet'])).toBeFalsy();
    expect(schema.isValid(['hexlet', 'code-basics'])).toBeTruthy();
  });
});
