function firstNonRepeating(str) {
  for (let char of str) {
    if (str.indexOf(char) === str.lastIndexOf(char)) {
      return char;
    }
  }
  return null;
}

console.log(firstNonRepeating("hello")); // Output: 'h'
console.log(firstNonRepeating("aabbcc")); // Output: null
