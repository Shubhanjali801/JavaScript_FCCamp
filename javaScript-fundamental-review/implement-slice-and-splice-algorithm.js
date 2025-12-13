function frankenSplice(arr1,arr2,n){

  // Make a copy of arr2 so we don't modify the original
  let result = arr2.slice(); 

  // Insert all elements of arr1 into result starting at index n
  result.splice(n, 0, ...arr1);
 
  return result;

}

console.log(frankenSplice([1, 2, 3], [4, 5], 1));
console.log(frankenSplice([1, 2], ["a", "b"], 1));
console.log(frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2));
console.log(frankenSplice([1, 2, 3, 4], [], 0));

// https://www.freecodecamp.org/learn/javascript-v9/lab-slice-and-splice/implement-the-slice-and-splice-algorithm