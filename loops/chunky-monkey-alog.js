function chunkArrayInGroups(arr, size) {
  // Break it up.
  const newArr = [];
  for (let i = 0; i < arr.length; i += size) {
    newArr.push(arr.slice(i, i + size));
  }
  return newArr;
}

// https://www.freecodecamp.org/learn/javascript-v9/lab-chunky-monkey/implement-the-chunky-monkey-algorithm