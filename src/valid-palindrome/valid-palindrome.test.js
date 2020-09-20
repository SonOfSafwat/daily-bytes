import isValidPalindrome from './valid-palindrome';

test('level, return true', () => {
  expect(isValidPalindrome('level')).toBeTruthy();
});

test('"algorithm", return false', () => {
  expect(isValidPalindrome('algorithm')).toBeFalsy();
});

test('"A man, a plan, a canal: Panama.", return true', () => {
  expect(isValidPalindrome('A man, a plan, a canal: Panama.')).toBeTruthy();
});
