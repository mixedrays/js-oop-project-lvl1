import {
  beforeEach, describe, it, expect,
} from '@jest/globals';
import Validator from '../validator';

describe('Validator string() schema', () => {
  let schema;

  beforeEach(() => {
    const v = new Validator();
    schema = v.number();
  });

  it('checks schema for null', () => {
    expect(schema.isValid(null)).toBeTruthy();
    expect(schema.required().isValid(null)).toBeFalsy();
  });

  it('checks required undefined number', () => {
    expect(schema.isValid()).toBeTruthy();
    expect(schema.required().isValid()).toBeFalsy();
  });

  it('checks positive number', () => {
    schema.positive();
    expect(schema.isValid(1)).toBeTruthy();
    expect(schema.isValid(-1)).toBeFalsy();
  });

  it('checks positive number chaining', () => {
    expect(schema.isValid(-1)).toBeTruthy();
    expect(schema.positive().isValid(-1)).toBeFalsy();
  });

  it('checks number range', () => {
    schema.range(-5, 5);

    expect(schema.isValid(-8)).toBeFalsy();
    expect(schema.isValid(5)).toBeTruthy();
  });

  it('checks positive number range', () => {
    schema.range(-5, 5);
    schema.positive();

    expect(schema.isValid(-3)).toBeFalsy();
    expect(schema.isValid(8)).toBeFalsy();
    expect(schema.isValid(5)).toBeTruthy();
  });
});
