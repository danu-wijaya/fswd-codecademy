/*
Create a function, tipCalculator(), that has two parameters, a string representing the quality of the service received and a number representing the total cost.

Return the tip, as a number, based on the following:
‘bad’ should return a 5% tip
‘ok’ should return a 15% tip
‘good’ should return a 20% tip
‘excellent’ should return a 30% tip
all other inputs should default to 18%
*/

const tipCalculator = (quality, total) => {
  if (quality === "bad") {
    return total * 0.05;
  } else if (quality === "ok") {
    return total * 0.15;
  } else if (quality === "good") {
    return total * 0.2;
  } else if (quality === "excellent") {
    return total * 0.3;
  } else {
    return total * 0.18;
  }
};

console.log(tipCalculator("poor", 100));
