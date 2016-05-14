var questions = ['Problem 1: Write a function called sum() that takes in two numbers as arguments and then returns the sum of those numbers.',
'Problem 2: Write a function called multiply() that takes in two numbers as arguments and then returns the product of those numbers.',
'Problem 3: Write a function called sumAndMultiply() that takes in THREE numbers as arguments and then returns two values in an array: the sum of those numbers and the product of those numbers.',
'Problem 4: Write a function called sumArray() that takes in an array of numbers as a single argument and then returns the sum of those numbers.',
'Problem 5: Write a function called multiplyArray() that takes in an array of numbers as a single argument and then returns the product of those numbers.'];

// output <p> variables
var q1 = document.getElementById('question1');
question1.textContent = questions[0];
var a1 = document.getElementById('answer1');
answer1.textContent = sumOf;
var q2 = document.getElementById('question2');
question2.textContent = questions[1];
var a2 = document.getElementById('answer2');
answer2.textContent = productAB;
var q3 = document.getElementById('question3');
question3.textContent = questions[2];
var a3 = document.getElementById('answer3');
answer3.textContent = sumTo;
var q4 = document.getElementById('question4');
question4.textContent = questions[3];
var a4 = document.getElementById('answer4');
answer4.textContent = qSum;
var q5 = document.getElementById('question5');
question5.textContent = questions[4];
var a5 = document.getElementById('answer5');
answer5.textContent = qProd;

var ansOne = sum(1,2);
var ansTwo = product(5,6);
var ansThree = sumAndMuliply(4,5,6);
var ansFour = sumArray([10,20,30,40]);
var ansFive = multiplyArray([10,20,30,40]);
