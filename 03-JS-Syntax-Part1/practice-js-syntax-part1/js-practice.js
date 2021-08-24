/*
JavaScript Practice: Data Types, Conditional, Functions
Practice JavaScript conditionals and functions with these 3 code challenges.

In these exercises, you will practice creating JavaScript functions. This is helpful if you want to improve your logical thought process and practice creating functions with proper JavaScript syntax.

Some of these challenges are difficult! Take some time to think about them before starting to code.

You might not get the solution correct on your first try — look at your output, try to find where you’re going wrong, and iterate on your solution.

Finally, if you get stuck, use our solution code! If you “Check Answer” twice with an incorrect solution, you should see an option to get our solution code. However, truly investigate that solution — experiment and play with the solution code until you have a good grasp of how it is working. Good luck!

*/

/*
Create a function colorMessage() that takes 2 string arguments, favoriteColor and shirtColor.

If the value of favoriteColor is the same as the value of shirtColor return the string 'The shirt is your favorite color!'.

If not, return the string 'That is a nice color.'

Feel free to test your code under the function definition.
*/

const colorMessage = (favoriteColor, shirtColor) => {
  if (favoriteColor === shirtColor) {
    return "The shirt is your favorite color";
  } else {
    return "That is a nice color.";
  }
};

console.log(colorMessage("green", "green"));

/*
Create a function isEven() that takes a number as its only parameter. The function should return true if the number is even and false if the number is odd.
*/

const isEven = (num) => (num % 2 == 0 ? true : false);
console.log(isEven(5));

/*
Create a function numberDigits() that takes the variable x as its only parameter.

If the variable x is between 0 and 9, return the string 'One digit: N', where N is the value of x. For example, numberDigits(5) would return:

'One digit: 5'
If the variable x is between 10 and 99, return the string 'Two digits: N', where N is the value of x. For example, numberDigits(12) would output:

'Two digits: 12'
Any other value of x, including negative numbers, return the string 'The number is: N', where N is the value of x. For example, numberDigits(-202) would output:

'The number is: -202'
*/

const numberDigits = (x) => {
  if (x >= 0 && x <= 9) {
    return `One digit:${x}`;
  } else if (x >= 10 && x <= 99) {
    return `Two digits:${x}`;
  } else {
    return `The number is:${x}`;
  }
};

console.log(numberDigits(-100));
