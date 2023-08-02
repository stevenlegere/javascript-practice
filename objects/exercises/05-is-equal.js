/**
 * Task description: Write a method that makes a shallow compare of two objects
 * Expected Result: True if objects are identical, false if objects are different ({ a: 1, b: 1 }, { a: 1, b: 1 }) => true
 * Task complexity: 2 of 5
 * @param {Object<string | number>} firstObj - Object with values of primitive data types
 * @param {Object<string | number>} secondObj - Object with values of primitive data types
 * @returns {boolean}
 */
export const isEqual = (firstObj, secondObj) => {
  if (typeof firstObj !== 'object' || firstObj === null || typeof secondObj !== 'object' || secondObj === null) {
    return false;
  }

  const firstObjKeys = Object.keys(firstObj);
  const secondObjKeys = Object.keys(secondObj);

  if (firstObjKeys.length !== secondObjKeys.length) {
    return false;
  }

  for (const key of firstObjKeys) {
    if (!secondObj.hasOwnProperty(key) || firstObj[key] !== secondObj[key]) {
      return false;
    }
  }

  return true;
};

console.log(isEqual({ a: 1, b: 1 }, { a: 1, b: 1 })); // Output: true
console.log(isEqual({ a: 1, b: 1 }, { a: 1, b: 2 })); // Output: false
console.log(isEqual({ a: 1, b: 1 }, { a: 1, c: 1 })); // Output: false
console.log(isEqual({ a: 1, b: 1 }, { a: 1, b: 1, c: 1 })); // Output: false
console.log(isEqual({ a: 1, b: 1 }, { b: 1, a: 1 })); // Output: true (order doesn't matter)

