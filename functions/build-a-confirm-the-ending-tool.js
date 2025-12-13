function confirmEnding(str, target) {
  // Extract the ending from the string using substring
  let ending = str.slice(- target.length);

  // Compare extracted ending with target
  return ending === target;
}

// Example tests
console.log(confirmEnding("Bastian", "n"));      // true
console.log(confirmEnding("Hello world", "world")); // true
console.log(confirmEnding("JavaScript", "Script")); // true
console.log(confirmEnding("OpenAI", "AI!"));     // false

// https://www.freecodecamp.org/learn/javascript-v9/lab-string-ending-checker/implement-a-string-ending-checker-function
