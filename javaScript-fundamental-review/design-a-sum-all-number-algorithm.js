function sumAll(arr) {  
  // Extract the two numbers
  const [num1, num2] = arr;

  // Find min and max to handle order
  const min = Math.min(num1, num2);
  const max = Math.max(num1, num2);

  // Use formula for sum of consecutive integers
  // Sum from min to max = (count of numbers) * (average of first and last)
  const count = max - min + 1;
  const sum = (count * (min + max)) / 2;

  return sum;
}

// Examples:
console.log(sumAll([4, 1])); // 10
console.log(sumAll([1, 4])); // 10
console.log(sumAll([5, 10])); // 45
console.log(sumAll([10, 5])); // 45