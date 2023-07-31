import { isPlainObject } from '../01-is-plain-object';

describe('isPlainObject function tests', () => {
  xit('{} is plain object === true', () => {
    expect(isPlainObject({})).toBe(true);
  });
  xit('{ a: 1 } is plain object === true', () => {
    expect(isPlainObject({ a: 1 })).toBe(true);
  });
  xit('[1, 2, 3] is not plain object === false', () => {
    expect(isPlainObject([1, 2, 3])).toBe(false);
  });
  xit('null is not plain object === false', () => {
    expect(isPlainObject(null)).toBe(false);
  });
  xit('undefined is not plain object === false', () => {
    expect(isPlainObject(undefined)).toBe(false);
  });
  xit('NaN is not plain object === false', () => {
    expect(isPlainObject(NaN)).toBe(false);
  });
  xit('1 is not plain object === false', () => {
    expect(isPlainObject(1)).toBe(false);
  });
  xit('"1" is not plain object === false', () => {
    expect(isPlainObject('1')).toBe(false);
  });
  xit('() => {} is not plain object === false', () => {
    expect(isPlainObject(() => {})).toBe(false);
  });
  xit('class is not plain object === false', () => {
    expect(isPlainObject(class Test {})).toBe(false);
  });
});
