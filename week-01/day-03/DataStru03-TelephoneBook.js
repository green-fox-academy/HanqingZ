var teleBook = new Map([
    ['William A. Lathan', '405-709-1865'],
    ['John K. Miller', '402-247-8568'],
    ['Hortensia E. Foster', '606-481-6467'],
    ['Amanda D. Newland', '319-243-5613'],
    ['Brooke P. Askew', '307-687-2982']
]);

let checkName = 'John K. Miller';
let checkNumber = '307-687-2982';
let checkName2 = 'Chris E.Myer';

console.log(teleBook.has(checkName));

for(let elem of teleBook){
    if(elem[1] === checkNumber){
        console.log(elem[0]);
        break;
    }
}

console.log(teleBook.has('Chris E. Myers'));