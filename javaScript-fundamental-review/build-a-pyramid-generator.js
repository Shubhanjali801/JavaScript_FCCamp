function pyramid(char, rows, inverted) {
  let result = "\n"; // pyramid must start with a newline

  for (let i = 0; i < rows; i++) {
    // If not inverted, row index increases: 1, 3, 5...
    // If inverted, row index decreases: 2*rows-1, 2*rows-3...
    const count = inverted
      ? (rows - i) * 2 - 1
      : (i + 1) * 2 - 1;

    // leading spaces for centering
    const spaces = " ".repeat(
      inverted
        ? i       // as you go down, spaces increase
        : rows - i - 1 // as you go up, spaces decrease
    );

    // build the row
    result += spaces + char.repeat(count) + "\n";
  }

  return result;
}

console.log(pyramid("o", 4, false));


// https://www.freecodecamp.org/learn/javascript-v9/lab-pyramid-generator/lab-pyramid-generator