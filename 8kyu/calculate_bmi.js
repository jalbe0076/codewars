// Write function bmi that calculates body mass index (bmi = weight / height2).

// if bmi <= 18.5 return "Underweight"
// if bmi <= 25.0 return "Normal"
// if bmi <= 30.0 return "Overweight"
// if bmi > 30 return "Obese"


// MY ORIGINAL SOLUTION
function bmi(weight, height) {
    var calcBmi = weight/Math.pow(height, 2);
  if (calcBmi <= 18.5) {
    return "Underweight";
  } else if (calcBmi <= 25) {
    return "Normal";
  } else if (calcBmi <= 30) {
    return "Overweight";
  } else {
    return "Obese"
  }
}