import canIterate from '../canIterate';

test.each([
  [new Map(), true],
  [new Set(), true],
  [null, false],
  ['Netology', true],
])('Проверка функции canIterate', (obj, expected) => {
  expect(canIterate(obj, expected)).toBe(expected);
});
