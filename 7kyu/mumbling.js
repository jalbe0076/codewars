// This time no story, no theory. The examples below show you how to write function accum:

// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.



// MY ORIGINAL SOLUTION
// function accum(s) {
// 	var upperString = s.toUpperCase().split('');
//   var newString = [];
 
//   for (var i = 0; i < s.length; i++) {
//     newString.push(upperString[i]);
//     var j = i;
    
//     while (j !== 0) {
//       newString.push(upperString[i].toLowerCase());
//       j--;
//     }
    
//     if (i < s.length - 1) {
//       newString.push("-")
//     }
//   }
  
//   return newString.join('');
// }


// REFACTOR
function accum(s) {
	return s.split('')
        .map(function(element, index) {
            return element.toUpperCase() + element.toLowerCase().repeat(index)
        }).join('-');
}