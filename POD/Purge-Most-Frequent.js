function purgeMostFrequent(arr) {
  // Step 1: Count frequency of each element
  const freq = {};
  for (const el of arr) {
    freq[el] = (freq[el] || 0) + 1;
  }

  // Step 2: Find the maximum frequency
  const maxFreq = Math.max(...Object.values(freq));

  // Step 3: Filter out elements with max frequency
  return arr.filter(el => freq[el] !== maxFreq);
}