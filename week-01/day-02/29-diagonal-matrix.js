'use strict';

// - Create (dynamically*) a two dimensional list
//   with the following matrix**. Use a loop!
//
//   0 0 0 1
//   0 0 1 0
//   0 1 0 0
//   1 0 0 0
//
// - Print this two dimensional list to the console
//
// * size should depend on a variable
// ** Relax, a matrix is just like an array

function creatArray(size){
    var mtx = new Array(size);
    for(var k = 0; k < mtx.length; k++){
        mtx[k] = new Array(size);
    }

    for(var i = 0; i < size; i++){
        for(var j = 0; j < size; j++){
            if(i+j === size-1)
                mtx[i][j] = 1;
            else
                mtx[i][j] = 0;
        }
    }
    return mtx;
}

var newmtx = creatArray(5);
newmtx.forEach(element => {console.log(element)});