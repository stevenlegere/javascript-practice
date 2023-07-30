import { intersection } from '../10-intersection';

describe('intersection function tests', () => {
  xit('should return [3]', () => {
    const data = [1, 2, 3];
    const data2 = [3, 4, 5];

    expect(intersection(data, data2)).toEqual([3]);
  });
  xit('should return [3, 4]', () => {
    const data = [1, 2, 3, 4];
    const data2 = [3, 4, 5];

    expect(intersection(data, data2)).toEqual([3, 4]);
  });
  xit('should return [1, 2]', () => {
    const data = [1, 2];
    const data2 = [1, 2, 3, 4, 5];

    expect(intersection(data, data2)).toEqual([1, 2]);
  });
  xit('should return [1, 2]', () => {
    const data = [1, 2];
    const data2 = [1, 2, 3, 4, 5];
    const data3 = [1, 2, 3, 4, 5, 6];

    expect(intersection(data, data2, data3)).toEqual([1, 2]);
  });
  xit('should return an empty array', () => {
    const data = [7, 8];
    const data2 = [1, 2, 3, 4, 5];
    const data3 = [1, 2, 3, 4, 5, 6];

    expect(intersection(data, data2, data3)).toEqual([]);
  });
});
