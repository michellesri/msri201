var sumOf;
var productAB;
var sumTo;
var qSum;
var productOf;
var qProd;
// Problem 1
function sum(a,b) {
  sumOf = 'The sum of ' + a + ' and ' + b + ' is ' + (a + b);
  console.log (sumOf);
  return a + b;
};

//Problem 2
function product(a,b) {
  productAB = 'The product of ' + a + ' and ' + b + ' is ' + (a * b);
  console.log(productAB);
  return a * b;
};

//Problem 3
function sumAndMuliply(a, b, c) {
  var arr = [];
  arr.push(sum());
  arr.push(product());
  sumTo = a + ' and ' + b + ' and ' + c + ' sum to ' + arr[0];
  console.log(sumTo);
  productOf = 'The numbers ' + a + ' and ' + b + ' and ' + c + ' have a product of ' + arr[1];
  console.log(productOf);
};

//Problem 4
function sumArray(arr) {
  var q = 0;
  for (var i = 0; i < arr.length; i++){
    q += (arr[i]);
  }
  var logText = logText + arr[i] + ',';
  console.table(arr);
  qSum = arr + ' was passed in as an array of numbers, and ' + q + 'is their sum.';
  console.log(qSum);
};

sumArray([10,20,30,40]);

//Problem 5
function multiplyArray(arr) {
  var q = 1;
  for (var i = 0; i < arr.length; i++){
    q *= arr[i];
  }
  console.table(arr);
  qProd = arr + ' have a product of ' + q + '.';
  console.log(qProd);
};

multiplyArray([10,20,30,40]);
