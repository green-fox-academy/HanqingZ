'use strict'

function makeMatrix(a, b, ...rest) {
  //this.row = a;
  //this.column = b;
  if(rest.length < (parseInt(a) * parseInt(b))) {
    //console.log(rest.length);
    return null;
  }
  var matrix = [];
  for(let i = 0; i < a; i++){
    var line = [];
    for(var j = (i*b); j < (i + 1) * b; j++){
        
      line.push(rest[j]);
      //console.log(rest.length);
    }
    matrix.push(line);
  }
  return matrix;
}


console.log(makeMatrix(3,3,1,2,3,4,5,6,7,8,9));
console.log(makeMatrix(2,2,1,2,3,4));

console.log(makeMatrix(2,2,1,3));