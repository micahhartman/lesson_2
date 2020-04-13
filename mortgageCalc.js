
// START

// Given a mathematical function,
// Solicit 3 pieces of information: loan amount, APR, loan duration
// 		- convert the information so that it's usable
// use information to perform mathematical function
// output the result of the function

// loan amount, p
// j, interest, APR/12 
// loan duration, n, in months
// m = monthly payment

const readline = require('readline-sync');

function prompt(message) {
	console.log(`=> ${message}`);
}

function invalidNumber(number) {
	return number.trimStart() === '' || Number.isNaN(Number(number));
}


prompt('Thanks for using the Loan Calculator.');

prompt("Enter Total Loan Amount (Principle): ");

let principle = readline.question();

while (invalidNumber(principle)) {
		prompt("Hmm... your second number doesn't seem to be valid.");
		principle = readline.question();
	}

prompt('Enter Annual Percentage Rate (APR): ');

let interest = readline.question();

while (invalidNumber(interest)) {
		prompt("Hmm... your second number doesn't seem to be valid.");
		interest = readline.question();
	}

prompt('Enter loan duration in months: ');
let duration = readline.question();

while (invalidNumber(duration)) {
		prompt("Hmm... your second number doesn't seem to be valid.");
		duration = readline.question();
	}


let monthlyPayment = Number(principle) * (Number(interest)/100) / (1 - Math.pow((1 + Number(interest)/100),(-Number(duration))));

console.log(monthlyPayment);


