function truncateString(str, num) {
  // If string length is more than the given number
  if (str.length > num) {
    return str.slice(0, num) + "...";
  }

  // If length is equal or less than the number
  return str;
}

// Example test
console.log(truncateString("Hello World", 5));  // Output: Hello...
console.log(truncateString("Code", 10));        // Output: Code
