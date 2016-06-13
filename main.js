// Create a quiz for your fellow classmates to take. The quiz should ask at least 15 HTML, CSS and JavaScript related questions.

var prompt = require('prompt-sync')();

var questions = [
	{
		text: '1. What does HTML mean?',
		answers: [
			'Hop The Molten Lava',
			'Hypertrophic Meta Logs',
			'Hysterical Text Meme Loads',
			'Hypertext Markup Language'
		],
		correct: 3
	},
	{
		text: '2. Where does a browser get an IP address when a link is clicked?',
		answers: [
			'Space',
			'The Domain Name System (DNS)',
			'Your Mom\'s house',
			'Bob\'s House of URLs'
		],
		correct: 1
	},
	{
		text: '3. What are the basic structural units of HTML called?',
		answers: [
			'Tags',
			'Sheets',
			'Atoms',
			'Doughnuts'
		],
		correct: 0
	},
	{
		text: '4. What elements are added to forms to make them screen-reader-friendly?',
		answers: [
			'Tags',
			'Labels',
			'Announcements',
			'Arrows'
		],
		correct: 1
	},
	{
		text: '5. What is added to an HTML element to differentiate it from others?',
		answers: [
			'Butter',
			'A paint bullet',
			'A class or ID attribute',
			'A pointer tag'
		],
		correct: 2
	},
	{
		text: '6. What does CSS mean?',
		answers: [
			'Corrective Safety Standards',
			'Cinematic Sans Serif',
			'Cryogenesis Slate Servers',
			'Cascading Style Sheets'
		],
		correct: 3
	},
	{
		text: '7. What notation delimits a CSS rule-set?',
		answers: [
			'Curly braces',
			'Angle brackets',
			'Arrows',
			'Square brackets'
		],
		correct: 0
	},
	{
		text: '8. Which of the following is not a valid selector type?',
		answers: [
			'Class',
			'ID',
			'Tag',
			'Bullet'
		],
		correct: 3
	},
	{
		text: '9. What selector combinator targets only a direct descendant of an element?',
		answers: [
			'=',
			'[]',
			'>',
			':'
		],
		correct: 2
	},
	{
		text: '10. Which of the following specificity calculations will win out?',
		answers: [
			'0,0,1',
			'1,0,2',
			'0,2,0',
			'1,0,0'
		],
		correct: 1
	},
	{
		text: '11. What unit of JavaScript code resolves to a value?',
		answers: [
			'An element',
			'A statement',
			'A summation',
			'An expression'
		],
		correct: 3
	},
	{
		text: '12. The = sign is what type of operator?',
		answers: [
			'Binary',
			'Unary',
			'Ternary',
			'Jelly'
		],
		correct: 0
	},
	{
		text: '13. var x = 0 is what type of expression?',
		answers: [
			'An opinionated expression',
			'An assignment expression',
			'A literal expression',
			'A bilateral expression'
		],
		correct: 2
	},
	{
		text: '14. What type of alphanumeric code unit is delimited by quotes?',
		answers: [
			'Booleans',
			'Numbers',
			'Calculations',
			'Strings'
		],
		correct: 3
	},
	{
		text: '15. What must happen first before an alphanumeric character can be used to hold a value?',
		answers: [
			'It must be capitalized',
			'It must be declared as a variable',
			'It must know how to party',
			'It must pass the litmus test'
		],
		correct: 1
	},
	{
		text: 'Bonus question: What is the airspeed velocity of an unladen swallow?',
		answers: [
			'20 kilometers per hour',
			'13 knots',
			'I don\'t know that!',
			'Ramming speed'
		],
		correct: 2
	}
];

// For each of the questions your program should prompt the test taker for an answer.
// Keep track of the number of total answers that the test taker answers correctly.
// When a test taker has answered all of the questions, display the total number of questions that they answered correctly as well as the percentage that they got right.
// If a test taker gets an answer correct your test should immediately tell them that they were correct. If the test taker gets a question wrong it should tell them that they were wrong and tell them the correct answer.

// Hard Mode
// Your answers should be case insensitive. For example, if the answer to a particular question is div, the test taker should be able to answer DIV or div or dIV and any of those answers should be counted as a correct answer.
// Time the test and inform the user how long they took to complete the test at the end.

var answer;
var totalCorrect = 0;
var percent;
var start = new Date().getTime();

for (var i = 0; i < questions.length; i++) {
	console.log(questions[i].text);
	for (var a = 0; a < questions[i].answers.length; a++) {
		console.log(questions[i].answers[a]);
	};
	answer = prompt('What is your answer?');
	if (answer.toLowerCase() === questions[i].answers[questions[i].correct].toLowerCase()) {
		console.log('Correct!');
		totalCorrect += 1;
	} else {
		console.log('Nope. The correct answer is ' + questions[i].answers[questions[i].correct]);
	};
};

percent = (totalCorrect / questions.length) * 100;

console.log('You got ' + totalCorrect + ' questions right!');
console.log('Your answers were ' + percent + '% correct.');

var elapsed = new Date().getTime() - start;
var sec = elapsed / 1000;
var min = sec / 60;

console.log('It took you ' + min + ' minutes to finish this quiz!');