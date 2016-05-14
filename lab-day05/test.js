// problem1 test
if (sum(a,b) === a + b) {
  console.log('pass');
}
else {
  console.log('fail');
}

// problem2 test

if (product(a,b) === a * b) {
  console.log('pass');
}
else {
  console.log('fail');
}

// problem3 test
function testSAM(a,b,c) {
  if (sumAndMultiply === sum(a,b) + c && product(a,b) * c){
    console.log('pass');
  }
  else {
    console.log('fail');
  }
}

//problem4 test
if (sumArr === myArray[0] + myArray[1] + myArray[2]) {
  console.log('pass');
}
else {
  console.log('fail');
}

//problem5 test

if (multArr === myArray[0] * myArray[1] * myArray[2]) {
  console.log('pass');
}
else {
  console.log('fail');
}
