function pyramid(char, rows, inverted) {
  let result = "\n"; 

  for (let i = 0; i < rows; i++) {

    const count = inverted
      ? (rows - i) * 2 - 1
      : (i + 1) * 2 - 1;

   
    const spaces = " ".repeat(
      inverted
        ? i       
        : rows - i - 1
    );


    result += spaces + char.repeat(count) + "\n";
  }

  return result;
}

console.log(pyramid("o", 4, false));


// https://www.freecodecamp.org/learn/javascript-v9/lab-pyramid-generator/lab-pyramid-generator