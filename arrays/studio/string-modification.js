const input = require('readline-sync');
let str = "LaunchCode";

//1) Use string methods to remove the first three characters from the string and add them to the end.
//Hint - define another variable to hold the new string or reassign the new string to str.
const newStr1 = str.slice(0,3);
//console.log(newStr1);
const newStr2 = str.slice(3,10);
//console.log(newStr2);
const finalStr = newStr2.concat(newStr1);
console.log(finalStr);
//Use a template literal to print the original and modified string in a descriptive phrase.
console.log(`${str} has been modified to ${finalStr}`);
//2) Modify your code to accept user input. Query the user to enter the number of letters that will be relocated.
let number = input.question("How many characters is being moved: ");
//3) Add validation to your code to deal with user inputs that are longer than the word. In such cases, default to moving 3 characters. Also, the template literal should note the error.
if (number == 3) {
    const newStr1 = str.slice(0,3);
    const newStr2 = str.slice(3,10);
    const finalStr = newStr2.concat(newStr1);
    console.log(`${str} is now ${finalStr}`);
} 