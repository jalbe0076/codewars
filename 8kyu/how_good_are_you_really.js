// There was a test in your class and you passed it. Congratulations!
// But you're an ambitious person. You want to know if you're better than the average student in your class.

// You receive an array with your peers' test scores. Now calculate the average and compare your score!

// Return True if you're better, else False!

// Note:
// Your points are not included in the array of your class's points. 
// For calculating the average point you may add your point to the given array!


// MY ORIGINAL SOLUTION

// function betterThanAverage(classPoints, yourPoints) {
//     var totalPoints = classPoints.concat(yourPoints);
//     var total = 0;
    
//     for (var i = 0; i < totalPoints.length; i++) {
//       total += totalPoints[i];
//     }
    
//     var ave = total / totalPoints.length;
    
//     if (yourPoints > ave) {
//       return true;
//     } else {
//       return false;
//     }
// }


// REFACTOR
function betterThanAverage(classPoints, yourPoints) {
    var total = 0;
    
    for (var i = 0; i < classPoints.length; i++) {
      total += classPoints[i];
    }
    return yourPoints > (total / classPoints.length);
}