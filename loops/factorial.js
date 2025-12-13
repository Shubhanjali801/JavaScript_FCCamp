let num = 2;
function factorialCalculator(num) {
    let result = 1;
    for (let i = 1; i <= num; ++i) {
        result *= i;
    }
    return result;

}
let factorial = factorialCalculator(num);
let resultMsg = `Factorial of ${num} is ${factorial}`;
console.log(resultMsg);
// https://www.freecodecamp.org/learn/javascript-v9/lab-factorial-calculator/build-a-factorial-calculator