/**
 * Task description: Write a method that invokes an array method on a specific path
 * Expected Result: ({ a: { b: [1, 2, 3] } }, 'a.b', splice, [1, 2]) => [2, 3]
 * Task complexity: 3 of 5
 * @param {Object} object
 * @param {String} path - path in an object to property
 * @param {String} func - function to invoke
 * @param {Array} [args] - list of args
 * @returns {boolean}
 */
export const invoke = (object, path, func, args) => {
  const pathParts = path.split('.');
  let currentObject = object;

  for (let i = 0; i < pathParts.length - 1; i++) {
    const key = pathParts[i];
    currentObject = currentObject[key];

    if (!currentObject || typeof currentObject !== 'object') {
      return object;
    }
  }

  const lastKey = pathParts[pathParts.length - 1];
  const array = currentObject[lastKey];

  if (Array.isArray(array) && typeof array[func] === 'function') {
    if (func === 'pop') {
      const result = array[func].call(array);
      return result;
    } else {
      const result = array[func].call(array, ...args);
      return result;
    }
  }

  return object;
};

const object = { a: { b: [1, 2, 3] } };
const result = invoke(object, 'a.b', 'splice', [1, 2]);

console.log(result); // Output: [2, 3]
console.log(object); // Output: { a: { b: [2, 3] } }

