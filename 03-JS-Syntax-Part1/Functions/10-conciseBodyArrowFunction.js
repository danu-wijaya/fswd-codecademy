/*
JavaScript also provides several ways to refactor arrow function syntax. The most condensed form of the function is known as concise body. We’ll explore a few of these techniques below:

1. Functions that take only a single parameter do not need that parameter to be enclosed in parentheses. However, if a function takes zero or multiple parameters, parentheses are required.

zero paramenter
const functionName = () => {}

one parameter
const functionName = paramOne => {}

two or more parameters
const functionName = (paramOne, paramTwo) => {}



2. A function body composed of a single-line block does not need curly braces. Without the curly braces, whatever that line evaluates will be automatically returned. The contents of the block should immediately follow the arrow => and the return keyword can be removed. This is referred to as implicit return.

single line block
const sumNumbers = number => number + number

multiline block
const sumNumbers = number => {
    const sum = number + number
    return sum
}

comparing single line and multiline arrow functions
So if we have a function:

const squareNum = (num) => {
  return num * num;
};
We can refactor the function to:

const squareNum = num => num * num;
Notice the following changes:

The parentheses around num have been removed, since it has a single parameter.
The curly braces { } have been removed since the function consists of a single-line block.
The return keyword has been removed since the function consists of a single-line block.



*/

// const plantNeedsWater = (day) => {
//     return day === 'Wednesday' ? true : false;
//   };

// after refactor to concise body
const plantNeedsWater = day => day === 'Wednesday' ? true : false;
