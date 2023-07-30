/**
 * Task description: Write a method that reverts input array
 * Expected Result: [1, 2, 3] => [3, 2, 1]
 * Task Complexity: 1 of 5
 * @param {Array} array - Array of any elements
 * @returns {Array}
 */
export const reverse = (array) => {
  // Solution 1: using Array.prototype.reverse()
  // return array.reverse();
  if (!Array.isArray(array)) {
    return array;
  }

  const reversedArray = [];
  for (let i = array.length -1; i >= 0; i--) {
    reversedArray.push(reverse(array[i]));
  }

  return reversedArray;

};
const data = [1, 2, 3, 4, 5];
const result = reverse(data);
console.log(result);