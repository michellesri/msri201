var f = document.getElementById('first');
var s = document.getElementById('second');
var t = document.getElementById('third');
var fourth = document.getElementById('fourth');
var fifth = document.getElementById('fifth');
var numCorrect = document.getElementById('numCorrect');
var greeting = document.getElementById('greeting');

var arrQuestions = [
  'does michelle have a bachelor\s degree?', 'is michelle a fun person who likes adventure?', 'is michelle a great person to hire?', 'what is michelle\'s ideal basketball number?', 'can you guess a color that michelle likes?'
];

var answer1 = [
  'correct!', 'that is not correct, michelle does have a BA', 'sorry, that is not correct :('];

var answer2 = ['correct!', 'that is not correct, michelle recently adventured to iceland and thailand', 'not a valid answer'
];

var answer3 = ['correct! michelle is great at teamwork!', 'that is not correct', 'not a valid answer'];

var answer4 = ['woohoo correct!', 'michelle\'s ideal basketball number is 23!', 'sorry, better luck next time.'];

var answer5 = ['that is correct!', 'that is not a right color'];

var prompt4 = ['please enter a valid number', 'too high! try again.', 'too low! guess again', 'please enter a valid number'];

var userName = prompt('what is your name?');
alert('hello ' + userName + ' i have some yes/no questions for you');
console.log(userName);

var correct = 0;
var totalQuest = 0;

greeting.textContent = 'Welcome ' + userName + '!';
var funkOne = function(){
  console.log('You are here.');

  var keepAsking = true;
  totalQuest++;
  while (keepAsking) {
    var firstAnswer = prompt(arrQuestions[0]);
    if (firstAnswer.toLowerCase() == 'yes' || firstAnswer.toLowerCase() == 'y') {
      keepAsking = false;
      correct += 1;
      f.textContent = 'degree ' + firstAnswer + ' woohoo bachelors!';
    }
    else if (firstAnswer.toLowerCase() == 'no' || firstAnswer.toLowerCase() == 'n') {
      console.log(answer1[1]);
      keepAsking = false;
      f.textContent = 'sorry, that is not correct :(';
    }
    else {
      console.log('answer displayed: ' + answer1[2]);
      keepAsking = true;
    }
  }
};
funkOne();
//end funkOne


var funkTwo = function() {
  totalQuest++;
  var secondAsking = true;
  while (secondAsking) {
    var secondAsking = prompt(arrQuestions[1]);
    if (secondAsking.toLowerCase() == 'yes' || secondAsking.toLowerCase() == 'y') {
      secondAsking = false;
      correct += 1;
      s.textContent = answer2[0];
    }
    else if (secondAsking.toLowerCase() == 'no' || secondAsking.toLowerCase() == 'n') {
      secondAsking = false;
      s.textContent = answer2[1];
    }
    else {
      s.textContent = answer2[2];
      secondAsking = true;
    }
  }
};

funkTwo();
//end funkTwo

var funkThree = function() {

  totalQuest++;
  var thirdAsking = true;
  while (thirdAsking) {
    var thirdAsking = prompt(arrQuestions[2]);
    if (thirdAsking.toLowerCase() == 'yes' || thirdAsking.toLowerCase() == 'y') {
      thirdAsking = false;
      correct += 1;
      t.textContent = answer3[0];
    }
    else if (thirdAsking.toLowerCase() == 'no' || thirdAsking.toLowerCase() == 'n') {
      thirdAsking = false;
      t.textContent = answer3[1];;
    }
    else {
      t.textContent = answer3[2];
      thirdAsking = true;
    }
  }
};
funkThree();
//end funkThree

var funkFour = function(){
  totalQuest++;
  var keepAsking = true;
  var fourthAsking = prompt(arrQuestions[3]);
  var counter = 1;
  console.log(counter);
  while (keepAsking) {
    console.log(fourthAsking);
    if (isNaN(fourthAsking)) {
      fourthAsking = prompt(prompt4[0]);
      console.log('is not a number');
    }

    else if (fourthAsking == 23) {
      fourth.textContent = answer4[1];
      keepAsking = false;
      correct += 1;
    }
    else {
      if (fourthAsking > 23) {
        fourthAsking = prompt(prompt4[1]);
      }
      else if (fourthAsking < 23) {
        fourthAsking = prompt(prompt4[2]);
      }
      else {
        fourthAsking = prompt(prompt4[3]);
      }
      fourth.textContent = answer4[2];
    }
    counter++;
    console.log('counter = ' + counter);
    if (counter > 2) {
      keepAsking = false;
    }
  }
};
funkFour();
//end of funkFour

var funkFive = function() {
  totalQuest++;
  var rightAnswer = false;
  var favColors = ['teal', 'white'];
  var fifthAnswer = prompt(arrQuestions[4]);
  while (Number(fifthAnswer) || fifthAnswer.length == 0) {
    fifthAnswer = prompt(answer5[1]);
  }
  if (fifthAnswer == favColors[0] || fifthAnswer == favColors[1] ) {
    correct++;
    fifth.textContent = answer5[0];
    rightAnswer = true;
  } else {
    fifth.textContent = answer5[1];
  }
};

funkFive();
//end of funkFive

numCorrect.textContent = userName + ', you got ' + correct + '/' + totalQuest + ' correct';
