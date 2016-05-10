var f = document.getElementById("first");
var s = document.getElementById("second");
var t = document.getElementById("third");
var greeting = document.getElementById("greeting");


var userName = prompt("what is your name?");
alert("hello " + userName + " i have some yes/no questions for you");


greeting.textContent = "Welcome " + userName + "!";

var keepAsking = true;
while (keepAsking) {
  var firstAnswer = prompt("do i have a bachelor's degree?");
  if (firstAnswer.toLowerCase() == "yes") {
    alert("correct!");
    keepAsking = false;
    f.textContent = "degree " + firstAnswer + " woohoo bachelor's!"
  }
  else if (firstAnswer.toLowerCase() == "no") {
    alert("that's incorrect. i do have a BA");
    keepAsking = false;
    f.textContent = "sorry, that's incorrect :("
  }
  else {
    alert("not a valid answer");
    keepAsking = true;
  }
}

var secondAsking = true;
while (secondAsking) {
  var secondAsking = prompt("am i a fun person who likes adventure?");
  if (secondAsking.toLowerCase() == "yes") {
    alert("correct!");
    secondAsking = false;
    s.textContent = "michelle is fun and adventurous!"
  }
  else if (secondAsking.toLowerCase() == "no") {
    alert("that's incorrect. i recently adventured to iceland and thailand");
    secondAsking = false;
    s.textContent = "sorry, that's incorrect. michelle has travelled to at least 7 different places this past year."
  }
  else {
    alert("not a valid answer");
    secondAsking = true;
  }
}

var thirdAsking = true;
while (thirdAsking) {
  var thirdAsking = prompt("am i a great person to hire?");
  if (thirdAsking.toLowerCase() == "yes") {
    alert("correct! i am great at teamwork!");
    thirdAsking = false;
    t.textContent = "michelle is outgoing and helps new team members integrate to their new teams!"
  }
  else if (thirdAsking.toLowerCase() == "no") {
    alert("that's incorrect.");
    thirdAsking = false;
    t.textContent = "that's incorrect. playing basketball and dancing my whole life have taught me how to work in teams."
  }
  else {
    alert("not a valid answer");
    thirdAsking = true;
  }
}
