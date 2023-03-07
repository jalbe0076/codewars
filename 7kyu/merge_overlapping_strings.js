// This kata requires you to write a function which merges two strings together. 
// It does so by merging the end of the first string with the start of the second string together when 
// they are an exact match.

// "abcde" + "cdefgh" => "abcdefgh"
// "abaab" + "aabab" => "abaabab"
// "abc" + "def" => "abcdef"
// "abc" + "abc" => "abc"

// NOTE: The algorithm should always use the longest possible overlap.
// "abaabaab" + "aabaabab" would be "abaabaabab" and not "abaabaabaabab"


// MY ORIGINAL SOLUTION
// function mergeStrings(first, second){
//     var secondMod = second;
//     var overlap = '';
//     for(var i = 0; i < first.length; i++) {
//       if(second.startsWith(first.slice(i))) {
//         overlap = first.slice(i);
//         secondMod = secondMod.replace(overlap, '');
//         break;
//       }
//     }
//     return first + secondMod;
// }



// REFACTOR
function mergeStrings(first, second){
    var overlap = '';
    for(var i = 0; i < first.length; i++) {
      if(second.startsWith(first.slice(i))) {
        overlap = first.slice(i);
        break;
      }
    }
    return first + second.slice(overlap.length);
  }