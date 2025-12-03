// 1. Outside the function, declare a variable year
let year = 2024;

// 2. Define the function isLeapYear
function isLeapYear(year) {
  
  // 3. Check leap year conditions
  if (year % 400 === 0) {
    return `${year} is a leap year.`;
  } else if (year % 100 === 0) {
    return `${year} is not a leap year.`;
  } else if (year % 4 === 0) {
    return `${year} is a leap year.`;
  } else {
    return `${year} is not a leap year.`;
  }
}

// 4. Call the function and store result into variable result
let result = isLeapYear(year);

// 5. Output result to console
console.log(result);