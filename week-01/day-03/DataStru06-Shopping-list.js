var price = new Map([
    ['Milk','1.07'],
    ['Rice','1.59'],
    ['Eggs','3.14'],
    ['Cheese','12.60'],
    ['Chicken Breasts','9.40'],
    ['Apples','2.31'],
    ['Tomato','2.58'],
    ['Potato','1.75'],
    ['Onion','1.10']
]);

var Bobpay = new Map([
    ['Milk','3'],
    ['Rice','2'],
    ['Eggs','2'],
    ['Cheese','1'],
    ['Chicken Breasts','4'],
    ['Apples','1'],
    ['Tomato','2'],
    ['Potato','1']
]);

var Alipay = new Map([
    ['Rice','1'],
    ['Eggs','5'],
    ['Chicken Breasts','2'],
    ['Apples','1'],
    ['Tomato','10']
]);


// How much does Bob pay?
let sumBobPayed = 0;
for(let a of Bobpay){
    for(let b of price){
        if(a[0] == b[0]){
            sumBobPayed += (parseInt(a[1]) * b[1]);
            continue;
        }
    }
}
console.log(sumBobPayed);

// How much does Alice pay?
let sumAliPayed = 0;
for(let c of Alipay){
    for(let d of price){
        if(c[0] == d[0]){
            sumAliPayed += (parseInt(c[1]) * d[1]);
            continue;
        }
    }
}
console.log(sumAliPayed);

// Who buys more Rice?
console.log(Alipay.get['Rice'] > Bobpay.get['Rice'] ? 'Alice' : 'Bob');

// Who buys more Potato?
console.log(Alipay.get['Potato'] > Bobpay.get['Potato'] ? 'Alice' : 'Bob');

// Who buys more different products?
console.log(Alipay.size > Bobpay.size ? 'Alice' : 'Bob');

// Who buys more products? (piece)
let aliPiece = 0;
let bobPiece = 0;

for(let e of Bobpay){
    bobPiece += parseInt(e[1]);
}
for(let f of Alipay){
    aliPiece += parseInt(f[1]);
}

console.log(aliPiece > bobPiece ? 'Alice' : 'Bob');