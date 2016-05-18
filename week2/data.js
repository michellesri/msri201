// how many pizzas were made, delivered, drivers
// var piTotal = document.getElementById('piTotal');
// piTotal.textContent = totalPizza;

//made this variable to calculate total pizzas, but need to add from other sections
var piTotal = document.getElementById('piTotal');
var totalPizza = 0;

var hours = ['8am', '9am', '10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm','9pm','10pm','11pm','12am','1am'];

var Bounds = [
  {
    name: 'Hillsboro',
    delBounds: [[0,4],[0,4],[1,4],[3,8],[5,12],[5,11]],
    pizzaBounds: [[0,4],[0,7],[2,15],[15,35],[12,31],[5,20]]
  },
  {
    name: 'Pearl',
    delBounds:[[1,3],[2,8],[1,6],[3,9],[1,3],[6,16]],
    pizzaBounds: [[1,7],[5,9],[2,13],[18,32],[5,12],[8,20]]
  },
  {
    name: 'DowntownPDX',
    delBounds: [[0,4],[0,4],[1,4],[4,6],[7,15],[0,2]],
    pizzaBounds: [[0,4],[0,7],[2,15],[10,26],[8,22],[0,8]]
  },
  {
    name: 'Buckman',
    delBounds: [[0,4],[0,4],[0,4],[13,18],[5,22],[5,21]],
    pizzaBounds:[[0,4],[0,7],[5,15],[25,39],[22,36],[16,31]]
  },
  {
    name: 'PDXairport',
    delBounds: [[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],
    pizzaBounds: [[2,7],[3,9],[1,5],[5,13],[22,42],[15,21]]
  },
  {
    name: 'Clackamas',
    delBounds: [[0,4],[0,4],[1,4],[5,9],[2,5],[2,4]],
    pizzaBounds:[[0,4],[0,7],[2,15],[6,19],[4,8],[2,5]]
  }
];

function Store(name, hours) {
  this.name = name;
  this.hours = hours;
}

var locationObjects = [];
for (var i = 0; i < Bounds.length; i++) {
  var stores = new Store(Bounds[i].name, hourValues(Bounds[i].pizzaBounds, Bounds[i].delBounds));
  // hourValues takes in two paramenters (pizzaBound, delBound) which are arrays of arrays
  // Bounds[0] = the first object in the bounds array with keynames pizzaBounds, delBounds.
  locationObjects.push(stores);

  // for (var j = 0; j < hours.length; j++) {
  //   var currentID = document.getElementById(Bounds[i].name + hours[j]);
  //   var text = hours[j] + '  ' + locationObjects[i].hours[j].pizzas + ' pizzas ' + locationObjects[i].hours[j].delivery + ' delivery ' + locationObjects[i].hours[j].drivers + ' drivers recommended.';
  //   var x = 'table';
  //   currentID.innerHTML = text;
  //   totalPizza += locationObjects[i].hours[j].pizzas;
    //locationObjects[0] = object with the key name of the location ('Hillsboro') and a key name hours = an array of 18hour objects
    // locationOBjects[0].hours[0] = hours = an object with a key name of this specific hour ('8am') and a key name of pizzas (a random number between our bounds (0 and 4))
    // '' it also has a key name of delivery which is a random number between our bounds and a key name of drivers which is the delivery / 3 rounded up.
  // }
}

for (var i = 0; i < hours.length; i++) {
  for (var j = 0; j < locationObjects.length; j++) {
    var table = document.getElementById(locationObjects[j].name + 'Table');
    var row = table.insertRow(-1);
    var html = '<td>' + hours[i] + '</td>' + '<td>' + locationObjects[j].hours[i].pizzas + '</td>' + '<td>' + locationObjects[j].hours[i].delivery + '</td>' + '<td>' + locationObjects[j].hours[i].drivers + '</td>';
    row.innerHTML = html;
  }
}

//how to insert rows into tables in javascript
//http://www.w3schools.com/jsref/met_table_insertrow.asp
//.insertRow(-1) inserts the row to the very end of the table
console.log(locationObjects);

function hourValues(pizzaBound, delBound) {
  var arrayOfHourObjects = [];
  for (var i = 0; i < 18; i++) {
    var currentHour = {
    };

    currentHour.name = hours[i];
    if (i < 3) {
      currentHour.pizzas = genNum(pizzaBound[0][0],pizzaBound[0][1]);
      if (currentHour.pizzas > delBound[0][1]) {
        currentHour.delivery = genNum(delBound[0][0], delBound[0][1]);
      }
      else {
        currentHour.delivery = genNum(delBound[0][0], currentHour.pizzas);
      }
      currentHour.drivers = getDrivers(currentHour.delivery);
      // instead of currentHour.drivers = getDrivers. i could do Math.ceil(currentHour.delivery / 3);
    }
    else if (i < 7) {
      currentHour.pizzas = genNum(pizzaBound[1][0],pizzaBound[1][1]);
      if (currentHour.pizzas > delBound[0][1]) {
        currentHour.delivery = genNum(delBound[0][0], delBound[1][1]);
      }
      else {
        currentHour.delivery = genNum(delBound[0][0], currentHour.pizzas);
      }
      currentHour.drivers = getDrivers(currentHour.delivery);
    }
    else if (i < 11) {
      currentHour.pizzas = genNum(pizzaBound[2][0],pizzaBound[2][1]);
      if (currentHour.pizzas > delBound[0][1]) {
        currentHour.delivery = genNum(delBound[0][0], delBound[2][1]);
      }
      else {
        currentHour.delivery = genNum(delBound[0][0], currentHour.pizzas);
      }
      currentHour.drivers = getDrivers(currentHour.delivery);
    }
    else if (i < 15) {
      currentHour.pizzas = genNum(pizzaBound[3][0],pizzaBound[3][1]);
      if (currentHour.pizzas > delBound[0][1]) {
        currentHour.delivery = genNum(delBound[0][0], delBound[3][1]);
      }
      else {
        currentHour.delivery = genNum(delBound[0][0], currentHour.pizzas);
      }
      currentHour.drivers = getDrivers(currentHour.delivery);
    }
    else if (i < 19) {
      currentHour.pizzas = genNum(pizzaBound[4][0],pizzaBound[4][1]);
      if (currentHour.pizzas > delBound[0][1]) {
        currentHour.delivery = genNum(delBound[0][0], delBound[4][1]);
      }
      else {
        currentHour.delivery = genNum(delBound[0][0], currentHour.pizzas);
      }
      currentHour.drivers = getDrivers(currentHour.delivery);
    }

    arrayOfHourObjects.push(currentHour);
  }
  return arrayOfHourObjects;
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
