import {
  beforeEach, describe, it, expect,
} from '@jest/globals';
import Validator from '../validator';

describe('Validator array() schema', () => {
  let schema;
  let v;

  beforeEach(() => {
    v = new Validator();
    schema = v.object();
  });

  it('checks schema shape', () => {
    schema.shape({
      name: v.string().required(),
      age: v.number().positive(),
    });

    expect(schema.isValid({ name: 'kolya', age: 100 })).toBeTruthy();
    expect(schema.isValid({ name: 'maya', age: null })).toBeTruthy();
    expect(schema.isValid({ name: '', age: null })).toBeFalsy();
    expect(schema.isValid({ name: 'ada', age: -5 })).toBeFalsy();
  });

  it('checks schema for null and empty object', () => {
    expect(schema.isValid(null)).toBeTruthy();
    expect(schema.isValid({})).toBeTruthy();
  });
});
