import reverse from '../reverse-string';

/**
 * @param {string} str
 */
const isValidPalindrome = str => {
  const cleanStr = str.toLowerCase().replace(/\W+/g, '');
  return cleanStr === reverse(cleanStr);
};
export default isValidPalindrome;
