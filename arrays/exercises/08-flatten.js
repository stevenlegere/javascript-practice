/**
 * Task description: Write a method that turns a deep array into a plain array
 * Expected Result: [1, 2, [3, 4, [5]]] => [1, 2, 3, 4, 5]
 * Task complexity: 3 of 5
 * @param {Array} array - A deep array
 * @returns {Array}
 */
export const flatten = (array) => {
  return array.reduce((acc, current) => {
    if (Array.isArray(current)) {
      acc.push(...flatten(current));
    } else {
      acc.push(current);
    }
    return acc;
  }, []);

};

const array = [1, 2, [3, 4, [5]]];
const plainArray = flatten(array);

console.log(plainArray); // [1, 2, 3, 4, 5]