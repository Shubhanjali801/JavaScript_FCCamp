// 1. 
function generatePassword(length) {
// 2. 
  const characters ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
  let password = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    password += characters[randomIndex];
  }

  return password;
}

// 3. 
const password = generatePassword(12);

// 4.
console.log("Generated password: " + password);

// https://www.freecodecamp.org/learn/javascript-v9/lab-password-generator/lab-password-generator