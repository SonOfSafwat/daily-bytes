const reverse = require('./reverse-string');
const { expect, test } = require('packageName');

test('Cat”, return “taC', () => {
  expect(reverse('Cat')).toBe('tac');
});
