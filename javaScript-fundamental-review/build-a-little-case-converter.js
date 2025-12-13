function titleCase(str){
//   console.log(str.split(" "));
//   console.log(str.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()));
  return str.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(" ");
  
}

console.log(titleCase("I like to code"));
console.log(titleCase("JavaScript is fun"));
console.log(titleCase("I'm a little tea pot"));
console.log(titleCase("sHoRt AnD sToUt"));