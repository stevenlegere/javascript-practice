/**
 * Task description: Write a method that clears array from all unnecessary elements, like false, undefined, empty strings, zero, null
 * Expected Result: [0, 1, false, 2, undefined, '', 3, null] => [1, 2, 3]
 * Task Complexity: 1 of 5
 * @param {Array} array - An array of any elements
 * @returns {Array}
 */
export const compact = (array) => {
  return array.filter(Boolean);
};

const array = [0, 1, false, 2, undefined, '', 3, null];
const compactedArray = compact(array);

console.log(compactedArray); // [1, 2, 3]

