// Problem 1
function sum(a,b) {
  console.log ('The sum of ' + a + ' and ' + b + ' is ' + (a + b));
  return a + b;
};

//Problem 2
function product(a,b) {
  console.log ('The product of ' + a + ' and ' + b + ' is ' + (a * b));
  return a * b;
};

//Problem 3
function sumAndMuliply(a, b, c) {
  var arr = [];
  arr.push(sum());
  arr.push(product());
  console.log(a + ' and ' + b + ' and ' + c + ' sum to ' + arr[0]);
  console.log('The numbers ' + a + ' and ' + b + ' and ' + c + ' have a product of ' + arr[1]);
};


//Problem 4
function sumArray(arr) {
  var q = 0;
  for (var i = 0; i < arr.length; i++){
    q += (arr[i]);
  }
  console.table(arr);
  console.log(q);
};

sumArray([10,20,30,40]);

//Problem 5
function multiplyArray(arr) {
  var q = 1;
  for (var i = 0; i < arr.length; i++){
    q *= arr[i];
  }
  console.table(arr);
  console.log(q);
};

multiplyArray([10,20,30,40]);
