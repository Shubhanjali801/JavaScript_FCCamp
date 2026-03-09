const accountId = 144556;
let accountEmail = "shubhanjali32@gmail.com";
var accountPassword = 12345
accountCity = "Uttar Pradesh";      

// accountId = 23;  // note allowed

accountEmail = "shub@gmail.com";
accountPassword = 456787;

// console.log(accountId);
// console.log(accountPassword);
// console.log(accountEmail);

console.table([accountEmail,accountId,accountPassword,accountCity]);
// $ node 01_variable.js
// ┌─────────┬──────────────────┐
// │ (index) │ Values           │
// ├─────────┼──────────────────┤
// │ 0       │ 'shub@gmail.com' │
// │ 1       │ 144556           │
// │ 2       │ 456787           │
// │ 3       │ 'Uttar Pradesh'  │
// └─────────┴──────────────────┘