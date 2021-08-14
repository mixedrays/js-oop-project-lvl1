import Validator from './validator';

describe('Validator string() schema', () => {
  it('checks null string', () => {
    const v = new Validator();
    const schema = v.string();

    expect(schema.isValid(null)).toBeFalsy();
  });

  it('checks empty string', () => {
    const v = new Validator();
    const schema = v.string();

    expect(schema.isValid('')).toBeTruthy();
  });

  it('checks required empty string', () => {
    const v = new Validator();
    const schema = v.string();
    schema.required();

    expect(schema.isValid('')).toBeFalsy();
  });

  it('checks contains() method', () => {
    const v = new Validator();
    const schema = v.string();

    expect(schema.contains('what').isValid('what does the fox say')).toBeTruthy();
  });

  it('checks contains() method 2', () => {
    const v = new Validator();
    const schema = v.string();

    expect(schema.contains('whatttt').isValid('what does the fox say')).toBeFalsy();
  });
});
