function multiPurposeFunction(action) {
  if (action) {
    console.log(action('John', 'Smith'));
    console.log(action('', 'Bond'));
  }
}

function frameFunction(arr) {
  // Write your code here
  multiPurposeFunction(function(...arr){
    return arr[0] == 0 ? arr[1] : arr.join(' ');
  })

  multiPurposeFunction((...arr) => {
    return arr[0] == 0 ? arr[1] : arr.join(' ');
  })
}

frameFunction();