'use strice'

function primitiveFields(obj){
  for(let c of Object.entries(obj)){
    if(c[1] != null || c[1] != "" || c[1] != undefined || c[1] != []){
      print(c[0]);
    }
  }
}

function print(c){
  console.log(c);
}

primitiveFields({ x: 1, y: true, z: [] });