const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

// 1. a function golfScore
let golfScore = (par, Stroke) => {
   if(Stroke === 1) return names[0];
   else if(Stroke <= par - 2) return names[1];
   else if(Stroke === par - 1) return names[2];
   else if(Stroke === par) return names[3];
   else if(Stroke === par + 1) return names[4];
   else if(Stroke === par + 2) return names[5];
   else if(Stroke >= par + 3) return names[6];
}
console.log(golfScore(4, 7));

// https://www.freecodecamp.org/learn/javascript-v9/lab-golf-score-translator/build-a-golf-score-translator