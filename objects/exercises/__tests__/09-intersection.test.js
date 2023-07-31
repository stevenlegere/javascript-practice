import { intersection } from '../09-intersection';

describe('intersection function tests', () => {
  xit('should return { b: 2 }', () => {
    const firstObject = {
      a: 1,
      b: 2,
    };
    const secondObject = {
      b: 2,
      c: 3,
    };

    expect(intersection(firstObject, secondObject)).toEqual({ b: 2 });
  });
  xit('should return { b: 2, c: 3 } 2', () => {
    const firstObject = {
      a: 1,
      b: 2,
      c: 3,
    };
    const secondObject = {
      b: 2,
      c: 3,
      e: null,
    };

    expect(intersection(firstObject, secondObject)).toEqual({ b: 2, c: 3 });
  });
  xit('should return empty object, no intersections', () => {
    const firstObject = {
      a: 1,
      b: 3,
    };
    const secondObject = {
      b: 2,
      c: 3,
    };

    expect(intersection(firstObject, secondObject)).toEqual({});
  });
});
