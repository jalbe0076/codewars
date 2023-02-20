// Check to see if a string has the same amount of 'x's and 'o's. 
// The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false



// MY ORIGINAL SOLUTION
// function XO(str) {
//     var game = str.toLowerCase().split("");
//     var x = 0;
//     var o = 0;
//     var other = 0;
    
//     for (var i = 0; i < game.length; i++) {
//       if (game[i].includes("o")) {
//         o += 1;
//       } else if (game[i].includes("x")) {
//         x += 1;
//       } else {
//         other += 1;
//       }
//     }
    
//     if (x === o || x === 0 && o === 0) {
//       return true;
//     } 
//     return false;
//   }



  // REFACTOR
  function XO(str) {
    let x = str.match(/x/gi);
    let o = str.match(/o/gi);
    return (x && x.length) === (o && o.length);
  }