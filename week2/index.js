// how many pizzas were made, delivered, drivers
// var piTotal = document.getElementById('piTotal');
// piTotal.textContent = totalPizza;

//made this variable to calculate total pizzas, but need to add from other sections
var piTotal = document.getElementById('piTotal');
var totalPizza = 0;

var bound = [
  [0,4],[0,7],[2,15],[15,35],[12,31],[5,20]
];
var hours = ['8am', '9am', '10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm','9pm','10pm','11pm','12am','1am'];
var delBound = [
  [0,4],[0,4],[1,4],[3,8],[5,12],[5,11]
];

var locations = ['Hillsboro', 'Pearl', 'DowntownPDX', 'Buckman', 'PDXairport', 'Clackamas'];

var locationObjects = [];
for (var i = 0; i < locations.length; i++) {
  var stores = {};
  stores.name = locations[i];
  stores.hours = pHours();
  locationObjects.push(stores);

  for (var j = 0; j < hours.length; j++) {
    totalPizza += locationObjects[i].hours[j].pizzas;
  }
}
piTotal.textContent = totalPizza + ' HAPPY PIZZA ODYSSEYS this week!';

function pHours() {
  var arr = [];
  for (var i = 0; i < 18; i++) {
    var hourOne = {
    };

    hourOne.name = hours[i];
    if (i < 3) {
      hourOne.pizzas = genNum(bound[0][0],bound[0][1]);
      hourOne.delivery = genNum(delBound[0][0], delBound[0][1]);
      hourOne.drivers = getDrivers(hourOne.delivery);
    }
    else if (i < 7) {
      hourOne.pizzas = genNum(bound[1][0],bound[1][1]);
      hourOne.delivery = genNum(delBound[1][0], delBound[1][1]);
      hourOne.drivers = getDrivers(hourOne.delivery);
    }
    else if (i < 11) {
      hourOne.pizzas = genNum(bound[2][0],bound[2][1]);
      hourOne.delivery = genNum(delBound[2][0], delBound[2][1]);
      hourOne.drivers = getDrivers(hourOne.delivery);
    }
    else if (i < 15) {
      hourOne.pizzas = genNum(bound[3][0],bound[3][1]);
      hourOne.delivery = genNum(delBound[3][0], delBound[3][1]);
      hourOne.drivers = getDrivers(hourOne.delivery);
    }
    else if (i < 19) {
      hourOne.pizzas = genNum(bound[4][0],bound[4][1]);
      hourOne.delivery = genNum(delBound[4][0], delBound[4][1]);
      hourOne.drivers = getDrivers(hourOne.delivery);
    }
    arr.push(hourOne);
  }
  return arr;
}

function getDrivers (deliveries){
  var x = Math.ceil(deliveries / 3);
  return x;
}

function genNum(max, min) {
  var num = Math.random() * (max - min + 1) + min;
  num = Math.floor(num);
  return num;
};
