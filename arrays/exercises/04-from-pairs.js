/**
 * Task description: Write a method that returns an object composed of key-value pairs.
 * Expected Result: [['a', 1], ['b', 2]] => { a: 1, b: 2 }
 * Task Complexity: 2 of 5
 * @param {Array} array - a deep array of pairs
 * @returns {Array}
 */


export const fromPairs = (array) => {
  const object = Object.fromEntries(array);
  return object;
};
console.log(fromPairs);
