import { invoke } from '../06-invoke';

describe('invoke function tests', () => {
  xit('pass array method splice', () => {
    const data = {
      a: {
        b: [1, 2, 3],
      },
    };

    expect(invoke(data, 'a.b', 'splice', [1, 3])).toEqual([2, 3]);
    expect(data).toEqual({
      a: {
        b: [1],
      },
    });
  });
  xit('pass array method pop', () => {
    const data = {
      a: {
        b: [1, 2, 3],
      },
    };

    expect(invoke(data, 'a.b', 'pop')).toBe(3);
    expect(data).toEqual({
      a: {
        b: [1, 2],
      },
    });
  });
  xit('pass array method pop', () => {
    const data = {
      a: {
        b: [1, 2, 3],
      },
    };

    expect(invoke(data, 'a.b', 'slice', [0, 1])).toEqual([1]);
    expect(data).toEqual({
      a: {
        b: [1, 2, 3],
      },
    });
  });
});
