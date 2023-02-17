const sum = require('./sum');

test('sums two values', () => {
  expect(sum(10, 5)).toBe(15);
})
