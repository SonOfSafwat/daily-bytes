import reverse from './reverse-string';

test('Cat”, return “taC', () => {
  expect(reverse('Cat')).toBe('tac');
});

test('“The Daily Byte”, return "etyB yliaD ehT”', () => {
  expect(reverse('The Daily Byte')).toBe('etyB yliaD ehT');
});

test('“civic”, return “civic”', () => {
  expect(reverse('civic')).toBe('civic');
});
