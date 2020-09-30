const assert = require('assert');

function addAllnumbers(array) {
  let count = 0;
  for (let index = 0; index < array.length; index += 1) {
    count += array[index];
  }
  return count;
}

const numbers = [9, 23, 10, 3, 8];
const expected = 53;
const output = addAllnumbers(numbers);

assert.strictEqual(typeof addAllnumbers, 'function');
assert.strictEqual(output, expected);
