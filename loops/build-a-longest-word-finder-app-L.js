function findLongestWordLength(str) {
  let maxCount = 0;

  const words = str.trim().split(/\s+/);

  for (const word of words) {
    const count = word.length;
    maxCount = Math.max(maxCount, count);
  }

  return maxCount;
}
// https://www.freecodecamp.org/learn/javascript-v9/lab-longest-word-in-a-string/build-a-longest-word-finder-app