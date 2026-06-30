const calcul = require('./app');

test('adds 1 + 2 to equal 3', () => {
  expect(calcul(1, 2)).toBe(3);
});

test('returns sum when a is greater than 10', () => {
  expect(calcul(15, 5)).toBe(20);
});

test('returns sum when a is exactly 10', () => {
  expect(calcul(10, 5)).toBe(15);
});
