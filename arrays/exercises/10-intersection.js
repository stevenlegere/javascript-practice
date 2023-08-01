/**
 * Task description: Write a method that creates an array of unique values that are included in all given arrays
 * Expected Result: ([1, 2], [2, 3]) => [2]
 * Task complexity: 4 of 5
 * @param {?} arrays - Arrays of primitive data types
 * @returns {Array}
 */
export const intersection = (...arrays) => {
  return arrays.reduce((acc, currentArray) => {
    return acc.filter((value) => currentArray.includes(value));
  });
};

const array1 = [1, 2];
const array2 = [2, 3];
const resultArray = intersection(array1, array2);

console.log(resultArray); // [2]
