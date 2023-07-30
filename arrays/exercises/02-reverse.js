/**
 * Task description: Write a method that reverts input array
 * Expected Result: [1, 2, 3] => [3, 2, 1]
 * Task Complexity: 1 of 5
 * @param {Array} array - Array of any elements
 * @returns {Array}
 */
export const reverse = (array) => {
  if (!Array.isArray(array)) {
    return array;
  }

  const reversedArray = [];
  for (let i = array.length - 1; i >= 0; i--) {
    const element = array[i];
    reversedArray.push(Array.isArray(element) ? reverse(element.reverse()) : element);
  }

  return reversedArray;
};

const data = [1, 2, 3, 4, 5];
const result = reverse(data);
console.log(result);