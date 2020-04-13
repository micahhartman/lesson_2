/*
	If player a chooses rock and player b chooses scissors, player a wins.
	If player a chooses paper and player b chooses rock, player a wins.
	If player a chooses scissors and player b chooses paper, player a wins.
	If both players choose the same item, neither player wins. It's a tie.
	Our version of the game lets the user plays against the computer. The game flow should go like this:

	The user makes a choice.
	The computer makes a choice.
	The winner is displayed.
*/

const readline = require('readline-sync');
const VALID_CHOICES = ['rock', 'paper', 'scissors'];

function prompt(message) {
	console.log(`=> ${message}`);
}

function displayWinner(choice, computerChoice) {
	prompt(`You chose ${choice}, computer chose ${computerChoice}`);
	 
	if ((choice === 'rock' && computerChoice === 'scissors') ||
			(choice === 'paper' && computerChoice === 'rock') ||
			(choice === 'scissors' && computerChoice === 'paper')) {
				prompt('You win!');
			} else if ( choice === computerChoice) {
				prompt('You and the computer tie!')
			} else { 
				prompt('Computer wins!');
	}
}
	

while (true) {
	prompt(`Choose one: ${VALID_CHOICES.join(', ')}`);
	let choice = readline.question().toLowerCase();

	while (!VALID_CHOICES.includes(choice)) {
		prompt (`That's not a valid selection. Please select select from ${VALID_CHOICES.join(', ')}.`);
		choice = readline.question();
	}

	let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
	let computerChoice = VALID_CHOICES[randomIndex];

displayWinner(choice, computerChoice);


prompt('Do you want a rematch? (Y/N)');
let rematchAnswer = readline.question().toLowerCase();
while (rematchAnswer[0] !== 'n' && rematchAnswer[0] !== 'y') {
	prompt('Please enter "y" or "n".');
	rematchAnswer = readline.question().toLowerCase;
}

if (rematchAnswer[0] !== 'y') break;
}



