import { flatten } from '../08-flatten';

describe('flatten function tests', () => {
  xit('should make an array flat', () => {
    const data = [1, 2, [3, 4, [5]]];

    expect(flatten(data)).toEqual([1, 2, 3, 4, 5]);
  });
  xit('should return a new flattened array', () => {
    const data = [1, 2, [3, 4, [5]]];

    const result1 = flatten(data);
    expect(result1 === data).toBe(false);
  });
});
