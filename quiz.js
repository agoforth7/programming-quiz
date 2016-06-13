var prompt = require('prompt-sync')();

// var firstName = prompt('What is your first name?');

// console.log('Hello ' + firstName + '!');



// var answer;
// var correct = 10;
// var i =0;

// console.log('Pick a number!');

// while (answer !== correct) {
// 	answer = parseInt(prompt('What is your guess?'));
// 	i++;
// 	if (answer > correct) {
// 		console.log('Lower!');
// 	} else if (answer < correct) {
// 		console.log('Higher!');
// 	} else {
// 		console.log('Yay! It only took you ' + i + ' tries!');
// 	}
// };



var questions = [
	{
		text: 'What does CSS stand for?',
		answers: [
			'Crazy Science Steve',
			'Cute Super Slugs',
			'Cascading Squirrel Snakes',
			'Cascading Style Sheets'
		],
		correct: 3
	},
	{
		text: "Where does a browser get an IP address when a link is clicked?",
		answers: [
			'Space',
			'The Domain Name System (DNS)',
			'Your Mom\'s house',
			'Bob\'s House of URLs'
		],
		correct: 1
	}
];

var answer;

for (var i = 0; i < questions.length; i++) {
	console.log(questions[i].text);
	for (var a = 0; a < questions[i].answers.length; a++) {
		console.log(questions[i].answers[a]);
	}
	answer = prompt('What is your answer?');
	if (answer === questions[i].correct) {
		console.log('Correct!');
	}
};
































// {
// 		text: "What is the airspeed velocity of an unladen swallow??",
// 		answers: [
// 			'20 kilometers per hour',
// 			'13 knots',
// 			'I don\'t know that!',
// 			'Ramming speed'
// 		],
// 		correct: 2
// 	}

