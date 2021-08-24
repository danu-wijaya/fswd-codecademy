/*
Write a function, toEmoticon(), that takes in a string and returns the corresponding emoticon as a string. Use a switch/case, and cover these cases:

'shrug' should return '|_{"}_|'
'smiley face' should return ':)'
'frowny face' should return':('
'winky face' should return ';)'
'heart' should return '<3'
any other input should return '|_(* ~ *)_|'
*/

// const toEmoticon = (word) => {
//   if (word === "shrug") {
//     return '|_{"}_|';
//   } else if (word === "smiley face") {
//     return ":)";
//   } else if (word === "frowny face") {
//     return ":(";
//   } else if (word === "winky face") {
//     return ";)";
//   } else if (word === "heart") {
//     return "<3";
//   } else {
//     return "|_(* ~ *)_|";
//   }
// };

// console.log(toEmoticon("heart"));

// Create function below
const colorMessage = (favoriteColor, shirtColor) => {
  if(favoriteColor === shirtColor){
    return 'The shirt is your favorite color'
  }else{
    return 'That is a nice color.'
  }
}

console.log(colorMessage(('green', 'green'))