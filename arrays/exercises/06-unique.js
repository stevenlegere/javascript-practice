/**
 * Task description: Write a method that returns a duplicate-free array
 * Expected Result: Duplicate-free array [1, 2, 3, 1, 2] => [1, 2, 3]
 * Task Complexity: 2 of 5
 * @param {Array<string | number>} array - Array of primitive data types
 * @returns {Array}
 */
export const unique = (array) => {
  return [...new Set(array)];
};

const originalArray = [1, 2, 3, 1, 2];
const resultArray = unique(originalArray);

console.log(resultArray);
console.log(originalArray === resultArray);

