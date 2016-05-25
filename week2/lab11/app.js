function gebi(id) {
  return document.getElementById(id);
}

var totalClicks = 0;
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

var images = [];

var divImg = gebi('divImg');
var divImg2 = gebi('divImg2');
var divImg3 = gebi('divImg3');
var imagesContainer = gebi('imagesContainer');
var newRoundBtn = gebi('newRoundBtn');
var buttonContainer = gebi('buttonContainer');

function getRandomInt() {
  return Math.floor(Math.random() * imgNames.length);
}

function showNewImage(index, location){
  console.log('index = ' + index);
  console.log(location);
  location.style['background-image'] = 'url("' + images[index].src + '")';
  location.imageIndex = index;
  images[index].incrementNshown();
  var s = 'show counts: ';
  images.map(function(pic){
    s += pic.Nshown;
    // console.log(pic);
  });
  // console.log(s);
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

resetPage();
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

buttonContainer.style.display = 'none';

function displayChart(){
  var s = '';
  for (var i = 0; i < images.length; i++) {
    s += ' ' + images[i].src + ' had ' + images[i].Nclicks + ' click(s) and was shown ' + images[i].Nshown + ' time(s).' + '</br>';
  }
  buttonContainer.style.display = 'none';
  gebi('totalVotes').innerHTML = s;
  draw(images, imgNames);
  newRoundBtn.style.visibility = 'visible';

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

var maxClicks = 16;

function refreshImage(location) {
  images[location.imageIndex].incrementClicks();
  var s = 'click counts: ';
  images.map(function(ele) {s += ele.Nclicks;});
  totalClicks++;
  console.log('total clicks ' + totalClicks);
  if (totalClicks >= maxClicks && totalClicks < 24) {
    buttonContainer.style.display = 'inline';
    imagesContainer.style.display = 'none';
  }
  else if(totalClicks >= 24) {
    buttonContainer.style.display = 'none';
    imagesContainer.style.display = 'none';
    displayChart();

  }

  showNewImage(getRandomInt(), divImg);
  showNewImage(getRandomInt(), divImg2);
  showNewImage(getRandomInt(), divImg3);
}

showNewImage(getRandomInt(), divImg);
showNewImage(getRandomInt(), divImg2);
showNewImage(getRandomInt(), divImg3);

var displayVotesBtn = gebi('displayVotesBtn');
displayVotesBtn.addEventListener('click', displayChart);

var voteMoreBtn = gebi('voteMoreBtn');
voteMoreBtn.addEventListener('click', function(){
  maxClicks = 24;

  buttonContainer.style.display = 'none';
  imagesContainer.style.display = 'inline';

});

var canvas = document.getElementById('canvas');

function draw(images, imgNames) {
  canvas.style.display = 'block';
  var clicksArr = [];
  var shownArr = [];
  var percentageArr = [];
  for (var i = 0; i < images.length; i++) {
    clicksArr.push(images[i].Nclicks);
    var x = 100 * (images[i].Nclicks / images[i].Nshown);
    shownArr.push(x);
  }
  var myChart = new Chart(canvas, {
    type: 'bar',
    data: {
      labels: imgNames,
      datasets: [{
        label: '# of Votes',
        data: clicksArr,
      },
        {
          type: 'line',
          label: 'votes/shown %',
          data: shownArr,
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
  images = [];
  for (var i = 0; i < imgNames.length; i++) {
    var img = new Image(imgNames[i]);
    images.push(img);
  }
}
