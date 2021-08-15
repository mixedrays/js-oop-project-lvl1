import {
  beforeEach, describe, it, expect,
} from '@jest/globals';
import Validator from './validator';

describe('Validator string() schema', () => {
  let schema;

  beforeEach(() => {
    const v = new Validator();
    schema = v.string();
  });

  it('checks null string', () => {
    expect(schema.isValid(null)).toBeFalsy();
  });

  it('checks empty string', () => {
    expect(schema.isValid('')).toBeTruthy();
  });

  it('checks required empty string', () => {
    schema.required();

    expect(schema.isValid('')).toBeFalsy();
  });

  it('checks contains() method', () => {
    expect(schema.contains('what').isValid('what does the fox say')).toBeTruthy();
  });

  it('checks contains() method 2', () => {
    expect(schema.contains('whatttt').isValid('what does the fox say')).toBeFalsy();
  });
});
