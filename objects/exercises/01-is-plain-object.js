/**
 * Task description: Write a method that verifies an argument is a plain object, not an array or null
 * Expected Result: True if object is plain, false otherwise. ({ a: 1 }) => true, ([1, 2, 3]) => false
 * Task complexity: 1 of 5
 * @param element - element to verify
 * @returns {boolean}
 */
export const isPlainObject = (arg) =>
  typeof arg === 'object' && arg !== null && !Array.isArray(arg);

  const result = isPlainObject({ a: 1 });
  console.log(result); // true
