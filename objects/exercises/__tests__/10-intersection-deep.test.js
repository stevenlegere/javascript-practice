import { intersectionDeep } from '../10-intersection-deep';

describe('intersectionDeep function tests', () => {
  xit('should return { b: 2 }', () => {
    const firstObject = {
      a: 1,
      b: 2,
    };
    const secondObject = {
      b: 2,
      c: 3,
    };

    expect(intersectionDeep(firstObject, secondObject)).toEqual({ b: 2 });
  });
  xit('should return { b: 2, c: 3 }', () => {
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

    expect(intersectionDeep(firstObject, secondObject)).toEqual({ b: 2, c: 3 });
  });
  xit('should return { b: { c: 2 } }', () => {
    const firstObject = {
      a: 1,
      b: {
        c: 2,
      },
      e: 3,
    };
    const secondObject = {
      b: {
        c: 2,
      },
      e: 4,
      f: null,
    };

    expect(intersectionDeep(firstObject, secondObject)).toEqual({ b: { c: 2 } });
  });
  xit('should return { b: { c: [1, 2] } }', () => {
    const firstObject = {
      a: 1,
      b: {
        c: [1, 2],
      },
      e: 3,
    };
    const secondObject = {
      b: {
        c: [1, 2],
      },
      e: 4,
      f: null,
    };

    expect(intersectionDeep(firstObject, secondObject)).toEqual({ b: { c: [1, 2] } });
  });
  xit('should return {}, first array deep', () => {
    const firstObject = {
      a: 1,
      b: {
        c: [[1], 2],
      },
      e: 3,
    };
    const secondObject = {
      b: {
        c: [1, 2],
      },
      e: 4,
      f: null,
    };

    expect(intersectionDeep(firstObject, secondObject)).toEqual({});
  });
  xit('should return { b: { c: [[1], 2] }}', () => {
    const firstObject = {
      a: 1,
      b: {
        c: [[1], 2],
      },
      e: 3,
    };
    const secondObject = {
      b: {
        c: [[1], 2],
      },
      e: 4,
      f: null,
    };

    expect(intersectionDeep(firstObject, secondObject)).toEqual({ b: { c: [[1], 2] } });
  });
  xit('should return { b: { c: [{ a: 1 }, 2] }}', () => {
    const firstObject = {
      a: 1,
      b: {
        c: [{ a: 1 }, 2],
      },
      e: 3,
    };
    const secondObject = {
      b: {
        c: [{ a: 1 }, 2],
      },
      e: 4,
      f: null,
    };

    expect(intersectionDeep(firstObject, secondObject)).toEqual({ b: { c: [{ a: 1 }, 2] } });
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

    expect(intersectionDeep(firstObject, secondObject)).toEqual({});
  });
});
