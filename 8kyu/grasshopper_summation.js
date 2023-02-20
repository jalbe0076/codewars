// Summation
// Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

// For example (Input -> Output):

// 2 -> 3 (1 + 2)
// 8 -> 36 (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8)



// MY ORIGINAL SOLUTION
// function summation(num) {
//     var arrNum = [];
//     for (var i = 1; i < (num + 1); i++) {
//       arrNum.push(i);
//     }
//     return arrNum.reduce((a, b) => a + b, 0);
// }



// REFACTOR
var summation = function (num) {
    var arrNum = 0;
    for (var i = 1; i < (num + 1); i++) {
      arrNum += i;
    }
    return arrNum;
}