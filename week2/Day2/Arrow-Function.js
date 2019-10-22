function multiPurposeFunction(action) {
  if (action) {
    console.log(action(3));
  }
}

function exampleNonAnonymFunction(param) {
  return param * param;
}

function frameFunction() {
  // this function call shows an example,
  // but it is not using anonym functions
  multiPurposeFunction(exampleNonAnonymFunction);
  // write your code here
  multiPurposeFunction(function(param){
    return Math.pow(param, 2);
  })
  multiPurposeFunction((param) => {
    return Math.pow(param, 2);
  })
}

frameFunction();