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

for (var i = 0; i < imgNames.length; i++) {
  var img = new Image(imgNames[i]);
  images.push(img);
}

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

var buttonContainer = gebi('buttonContainer');
buttonContainer.style.display = 'none';

function refreshImage(location) {
  images[location.imageIndex].incrementClicks();
  var s = 'click counts: ';
  images.map(function(ele) {s += ele.Nclicks;});
  totalClicks++;
  console.log('total clicks ' + totalClicks);
  if (totalClicks >= 16) {
    buttonContainer.style.display = 'inline';

  }
  else {
    var displayVotesBtn = gebi('displayVotesBtn');
    displayVotesBtn.addEventListener('click', function(){
      // display these as tables later?
      var s = '';
      for (var i = 0; i < images.length; i++) {
        s += ' ' + images[i].src + images[i].Nshown + images[i].Nclicks + '</br>';
      }
      gebi('totalVotes').innerHTML = s;
    });

    showNewImage(getRandomInt(), divImg);
    showNewImage(getRandomInt(), divImg2);
    showNewImage(getRandomInt(), divImg3);
  }
}

showNewImage(getRandomInt(), divImg);
showNewImage(getRandomInt(), divImg2);
showNewImage(getRandomInt(), divImg3);

function draw(numArray, pcntArray, labelArray) {
  var canvas = document.getElementById('canvas');

  var myChart = new Chart(canvas, {
    type: 'bar',
    data: {
      labels: labelArray,
      datasets: [{
        label: '# of Votes',
        data: numArray,
      },
        {
          type: 'line',
          label: 'votes/shown %',
          data: pcntArray
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
