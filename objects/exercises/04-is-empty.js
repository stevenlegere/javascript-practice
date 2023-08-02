/**
 * Task description: Write a method that makes a shallow check is object empty
 * Expected Result: ({}) => true, ({ a: undefined }) => true, ({ a: 1 }) => false
 * Empty values: '', null, NaN, undefined
 * Task complexity: 2 of 5
 * @param {Object} object - Object with values of primitive data types
 * @returns {boolean}
 */
export const isEmpty = (object) => {
  if (typeof object !== 'object' || object === null) {
    return true;
  }

  for (const key in object) {
    if (object.hasOwnProperty(key)) {
      const value = object[key];
      if (value !== null && value !== undefined && value !== '' && !Number.isNaN(value)) {
        return false;
      }
      }
    }
    return true;
  };
