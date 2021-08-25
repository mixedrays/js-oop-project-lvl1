import {
  beforeEach, describe, it, expect,
} from '@jest/globals';
import Validator from '../validator';

describe('Validator array() schema', () => {
  let v;

  beforeEach(() => {
    v = new Validator();
  });

  it('checks addValidator() method', () => {
    const fn = (value, start) => value.startsWith(start);
    v.addValidator('string', 'startWith', fn);

    const schema = v.string().test('startWith', 'H');
    expect(schema.isValid('exlet')).toBeFalsy(); // false
    expect(schema.isValid('Hexlet')).toBeTruthy(); // true
  });

  it('checks addValidator() method 2', () => {
    const fn = (value, min) => value >= min;
    v.addValidator('number', 'min', fn);

    const schema = v.number().test('min', 5);
    expect(schema.isValid(4)).toBeFalsy(); // false
    expect(schema.isValid(6)).toBeTruthy(); // true
  });
});
