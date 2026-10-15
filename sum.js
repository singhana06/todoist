const assert = require('node:assert');

function sum(a, b) {
  return a + b;
}

assert.strictEqual(sum(1, 2), 3);
assert.strictEqual(sum(-1, 1), 0);
assert.strictEqual(sum(0, 0), 0);
assert.strictEqual(sum(0.5, 0.25), 0.75);

console.log('sum.js: all assertions passed');

module.exports = sum;
