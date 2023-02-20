// Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.



// MY ORIGINAL SOLUTION
// function repeatStr (n, s) {
//     var int = "";
//     for (var i = 0; i < n; i++) {
//       int += s;
//     }
//     return int;
// }


// REFACTOR
function repeatStr (n, s) {
    return s.repeat(n);
}