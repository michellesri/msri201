var imgNames = [
  'bird.png',
  'plane.jpg',
  'race.jpeg',
  'mario.png',
  'blue.jpg',
  'eagle.jpeg',
  'crocodile.png',
  'game.jpg',
  'sonic.png',
  'car.jpg'
];

var totalClicks = 0;

var images = [];
///these have event listeners under them
var divImg = gebi('divImg');
var divImg2 = gebi('divImg2');
var divImg3 = gebi('divImg3');

// console.log('divImg.imageIndex = ' + divImg.imageInd
divImg.addEventListener('click', function() {
  refreshImage(divImg);
});
divImg2.addEventListener('click', function() {
  refreshImage(divImg2);
});
divImg3.addEventListener('click', function() {
  refreshImage(divImg3);
});

var imagesContainer = gebi('imagesContainer');
var newRoundBtn = gebi('newRoundBtn');
var buttonContainer = gebi('buttonContainer');

buttonContainer.style.display = 'none';
//// note to self: button container needs to consistently use display or visibility. not both.

var maxClicks = 16;

var displayVotesBtn = gebi('displayVotesBtn');

var voteMoreBtn = gebi('voteMoreBtn');

var canvas = document.getElementById('canvas');

var firstImageBack = localStorage.firstImage; // is there a keyname on my localStorage object that's called firstImage
var secondImageBack = localStorage.secondImage;
var thirdImageBack = localStorage.thirdImage;
var totalClicksBack = localStorage.totalClicks;
if(!localStorage.images){
  console.log('localStorage does not hold state');
  firstImageBack = getRandomInt();
  secondImageBack = getRandomInt();
  thirdImageBack = getRandomInt();
  /// added empty images array right here (2/2)
  images = [];
  for (var i = 0; i < imgNames.length; i++){
    var img = new Image(imgNames[i]); //this function is on line 116
    images.push(img);
  }
} else {
  console.log('localStorage has state');
  var imagesBack = JSON.parse(localStorage.images);
  for (var i = 0; i < imgNames.length; i++) {
    var img = new Image(imgNames[i]);
    img.Nclicks = imagesBack[i].Nclicks;
    img.Nshown = imagesBack[i].Nshown;
    images.push(img);
  }
  totalClicks = totalClicksBack;
  console.log('total clicks ' + totalClicks);
  if (totalClicks >= maxClicks && totalClicks < 24) {
    buttonContainer.style.display = 'block';   // block or none are the choices
    imagesContainer.style.display = 'none';
  }
  else if(totalClicks >= 24) {
    buttonContainer.style.display = 'none';
    imagesContainer.style.display = 'none';
    displayChart();

  }
}

console.log(images);
showNewImage(firstImageBack, divImg); //div image is a document object
showNewImage(secondImageBack, divImg2);
showNewImage(thirdImageBack, divImg3);

//localStorage.chartVisible
// localStorage.images = JSON.stringify(images);
// localStorage.firstImage = firstImage;
// localStorage.secondImage = secondImage;
// localStorage.thirdImage = thirdImage;

//the new round goes up until 24. doesn't stop at 16.

/// ----- everything above this line happens at the start of the page --------

function showNewImage(index, location){
  console.log('index = ' + index);
  console.log('location = ' + location);
  location.style['background-image'] = 'url("' + images[index].src + '")'; //ex the url: url('img/bird.jpg')
  /// ^^^ this sets the background image to ^^^
  location.imageIndex = index;
  /// ^^ here we are adding a keyname 'imageIndex' to location which is (divImg)
  images[index].incrementNshown();
}

function Image(src) {
  this.src = 'img/' + src;
  this.Nclicks = 0;
  this.Nshown = 0;
  this.incrementClicks = function() {
    this.Nclicks++;
  };
  this.incrementNshown = function() {
    this.Nshown++;
  };
}

function refreshImage(location) {
  images[location.imageIndex].incrementClicks();
  totalClicks++;

  console.log('total clicks ' + totalClicks);
  if (totalClicks >= maxClicks && totalClicks < 24) {
    buttonContainer.style.display = 'block';   // block or none are the choices
    imagesContainer.style.display = 'none';
  }
  else if(totalClicks >= 24) {
    buttonContainer.style.display = 'none';
    imagesContainer.style.display = 'none';
    displayChart();

  }
  var firstImage  = getRandomInt();
  var secondImage = getRandomInt();
  var thirdImage = getRandomInt();
  showNewImage(firstImage, divImg);
  showNewImage(secondImage, divImg2);
  showNewImage(thirdImage, divImg3);
  localStorage.images = JSON.stringify(images); //add everything in the images array to localStorage object
  localStorage.firstImage = firstImage;
  localStorage.secondImage = secondImage;
  localStorage.thirdImage = thirdImage;
  localStorage.totalClicks = totalClicks;

}

// showNewImage(getRandomInt(), divImg);
// showNewImage(getRandomInt(), divImg2);
// showNewImage(getRandomInt(), divImg3);

displayVotesBtn.addEventListener('click', displayChart);

voteMoreBtn.addEventListener('click', function(){
  maxClicks = 24;

  buttonContainer.style.display = 'none';
  imagesContainer.style.display = 'inline';

});

function displayChart(){
  var s = '';
  for (var i = 0; i < images.length; i++) {
    s += ' ' + images[i].src + ' had ' + images[i].Nclicks + ' click(s) and was shown ' + images[i].Nshown + ' time(s).' + '</br>';
  }
  gebi('totalVotes').innerHTML = s;
  draw(images, imgNames);
  newRoundBtn.style.visibility = 'visible';
  localStorage.chartVisible = true;
  console.log('displayyyyy');

}

newRoundBtn.addEventListener('click', function(){
  newRoundBtn.style.visibility = 'hidden';
  canvas.style.display = 'none';
  imagesContainer.style.display = 'block';
  totalClicks = 0;
  gebi('totalVotes').innerHTML = '';
  resetPage();
  showNewImage(getRandomInt(), divImg);
  showNewImage(getRandomInt(), divImg2);
  showNewImage(getRandomInt(), divImg3);
});

function draw(images, imgNames) {
  canvas.style.display = 'block';
  var clicksArr = [];
  var shownArr = []; //the percentage of the amount of times it was clicked
  for (var i = 0; i < images.length; i++) {
    clicksArr.push(images[i].Nclicks);
    var x = 100 * (images[i].Nclicks / images[i].Nshown);
    shownArr.push(x);
  }
  var myChart = new Chart(canvas, {
    type: 'bar',
    data: {
      labels: imgNames, //x axis
      datasets: [{
        label: '# of Votes',
        data: clicksArr, //y axis
      },
        {
          type: 'line',
          label: 'votes/shown %',
          data: shownArr, //y axis
        }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: { beginAtZero:true}
        }]
      }
    }
  });
}

function resetPage(){
  // clearing out
  images = [];
  for (var i = 0; i < imgNames.length; i++) {
    var img = new Image(imgNames[i]);
    images.push(img);
  }
  localStorage.clear();
}

function gebi(id) {
  return document.getElementById(id);
}

function getRandomInt() {
  return Math.floor(Math.random() * imgNames.length);
}
