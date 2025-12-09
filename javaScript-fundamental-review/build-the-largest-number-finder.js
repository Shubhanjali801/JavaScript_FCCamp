function largestOfAll(arr){
   let largest1 = arr[0][0];
   for (let i = 0; i < arr[0].length; i++){
     if (arr[0][i] > largest1) {
       largest1 = arr[0][i];
     }
   }

   let largest2 = arr[1][0];
   for (let m = 0; m < arr[1].length; m++){
     if (arr[1][m] > largest2){
       largest2 = arr[1][m];
     }
   }

   let largest3 = arr[2][0];
   for (let n = 0; n < arr[2].length; n++){
     if (arr[2][n] > largest3){
       largest3 = arr[2][n];
     }
   }

   let largest4 = arr[3][0];
   for (let y = 0; y < arr[3].length; y++){
     if (arr[3][y] > largest4){
       largest4 = arr[3][y];
     }
   }

   let array = new Array(largest1, largest2, largest3, largest4);
   return array
}

console.log(largestOfAll([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]))

// https://www.freecodecamp.org/learn/javascript-v9/lab-largest-number-finder/build-the-largest-number-finder