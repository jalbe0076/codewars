// Write a function to convert a name into initials. 
// This kata strictly takes two words with one space in between them.
// The output should be two capital letters with a dot separating them.

// It should look like this:
// Sam Harris => S.H
// patrick feeney => P.F



// MY ORIGINAL SOLUTION
// function abbrevName(name){
//     var names = name.split(" ");
//     var initial = "";
//     for (var i = 0; i < names.length; i++) {
//       var letter = names[i].charAt(0).toUpperCase();
//       initial += letter;
//       if (names[i] === names[0]) {
//         initial += ".";
//       }
//     }
//     return initial;
// }  



// REFACTOR
function abbrevName(name){
    var nameArray = name.split(" ");
    return (nameArray[0][0] + "." + nameArray[1][0]).toUpperCase();
}
  