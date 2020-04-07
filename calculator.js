// ask the user for the first number
//Ask the user for the second number
// Ask the user for an operation to perform
// Perform the operation on the two numbers
// Print the result to the terminal

const readline = require('readline-sync');

console.log('Welcome to Calculator!');

console.log("What's the first number?");
let number1 = readline.question();

console.log("what's the second number?");
let number2 = readline.question();

console.log(`You selected ${number1} as your first number, and ${number2} as your second number.`);

console.log('What operation would you like to perform? \n1) Add 2) Subtract 3) Multiply 4) Divide');
let operation = readline.question();


let output;

if (operation.toLowerCase() === 'add' || operation === '1') {
	output = Number(number1) + Number(number2);

} else if (operation.toLowerCase() === 'subtract' || operation === '2') {
	output = Number(number1) - Number(number2);

} else if (operation.toLowerCase() === 'multiply' || operation === '3') {
	output = Number(number2) * Number(number1);

} else if (operation.toLowerCase() === 'divide' || operation === '4') {
	output = Number(number1) / Number(number2);
};

console.log(`The result is: ${output}.` );
