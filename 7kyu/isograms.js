// An isogram is a word that has no repeating letters, consecutive or non-consecutive. 
// Implement a function that determines whether a string that contains only letters is an isogram. 
// Assume the empty string is an isogram. Ignore letter case.

// Example: (Input --> Output)

// "Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case)

// isIsogram "Dermatoglyphics" = true
// isIsogram "moose" = false
// isIsogram "aba" = false



// MY ORIGINAL SOLUTION
function isIsogram(str){
    var index = 0;
    
    for(var i = 1; i <= str.length; i++) {
      var wordMod = str.toLowerCase().substring(i);
      if(wordMod.includes(str.toLowerCase().charAt(index))) {
        return false;
      }
      index++;
    }
    return true;
}