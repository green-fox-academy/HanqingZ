'use strict'

const vectors = [
  [1, 2, 3],
  [],
  [2, 3],
  [-1],
  [6, 7, 8, 9],
];

function initializer(x=0, y=0, z=0) {
  return [x, y, z];
}

vectors.map((e) => {
  console.log(initializer(...e));
})