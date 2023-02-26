// Complete the method that takes a boolean value and return a "Yes" string for true, 
// or a "No" string for false.


// MY ORIGINAL SOLUTION
// function boolToWord( bool ){
//     if (bool === true) {
//       return "Yes";
//     } else {
//       return "No";
//     }
// }



// REFACTOR
function boolToWord( bool ){
  return bool ? 'Yes' : 'No';
}