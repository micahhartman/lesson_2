// ask the user for the first number
//Ask the user for the second number
// Ask the user for an operation to perform
// Perform the operation on the two numbers
// Print the result to the terminal

const readline = require('readline-sync');

function prompt(message) {
	console.log(`=> ${message}`);
}

prompt('Welcome to Calculator!');

while (true) {
	prompt("What's the first number?");
	let number1 = readline.question();

	function invalidNumber(number) {
		return number.trimStart() === '' || Number.isNaN(Number(number));
	}

	while (invalidNumber(number1)) {
		prompt("Hmm.. that doesn't look like a valid number.");
		number1 = readline.question();
	}

	prompt("what's the second number?");
	let number2 = readline.question();

	while (invalidNumber(number2)) {
		prompt("Hmm... your second number doesn't seem to be valid.");
		number2 = readline.question();
	}

	prompt(`You selected ${number1} as your first number, and ${number2} as your second number.`);

	prompt('What operation would you like to perform? \n1) Add 2) Subtract 3) Multiply 4) Divide');
	let operation = readline.question().toLowerCase();

	while (!['1', 'add', '2', 'subtract', '3', 'multiply', '4', 'divide'].includes(operation)) {
		prompt('You must select one of the operations listed.');
		operation = readline.question().toLowerCase();
	}

	let output;
	switch(operation) {
		case '1':
		case 'add':
			output = Number(number1) + Number(number2);
			break;
		case '2':
		case 'subtract':
			output = Number(number1) - Number(number2);
			break;
		case 'multiply':
		case '3': 
			output = Number(number2) * Number(number1);
			break;
		case 'divide':
		case '4':
			output = Number(number1) / Number(number2);
			break;
	};

	prompt(`The result is: ${output}.` );

	prompt(`Would you like to do another calculation? \n 1) Yes 2) No`);
	let calculateAgain = readline.question().toLowerCase();

	if (calculateAgain == 'no') break;
	if (calculateAgain == '2') break;
	if (calculateAgain == 'n') break;
	}

