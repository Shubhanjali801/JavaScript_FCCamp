function confirmEnding(str, target) {
  // Extract the ending from the string using substring
  let ending = str.slice(-target.length);

  // Compare extracted ending with target
  return ending === target;
}

// Example tests
console.log(confirmEnding("Bastian", "n"));      // true
console.log(confirmEnding("Hello world", "world")); // true
console.log(confirmEnding("JavaScript", "Script")); // true
console.log(confirmEnding("OpenAI", "AI!"));     // false
