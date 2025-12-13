function repeatStringNumTimes(str, num) {
  if (num <= 0) {
    return "";
  }

  let result = "";

  for (let i = 0; i < num; i++) {
    result += str;
  }

  return result;
}

// https://www.freecodecamp.org/learn/javascript-v9/lab-repeat-a-string/build-a-string-repeating-function