function repeat(str, times) {
  if (times < 0) return '';
  let result = '';
  for (let i = 0; i < times; i++) {
    result += str;
  }
  return result;
}

// Example usage:
// console.log(repeat('abc', 3)); // Output: 'abcabcabc'
// console.log(repeat('xyz', 0)); // Output: ''
// console.log(repeat('hello', -1)); // Output: ''