var pdb = new Map([
    ['Eggs','200'],
    ['Milk','200'],
    ['Fish','400'],
    ['Apples','150'],
    ['Bread','50'],
    ['Chicken','550']
]);

// How much is the fish?
console.log(pdb.get('Fish'));

// What is the most expensive product?
let maxValue = Math.max(...pdb.values());
for(let a of pdb){
    if(a[1] == maxValue){
        console.log(a[0]);
    }
}

// What is the average price?
let sum = 0;
pdb.forEach(function(value){
    sum += parseInt(value);
})
console.log((sum/pdb.size).toFixed(2));

// How many products' price is below 300?
let count2 = 0;
for(let c of pdb){
    if(c[1] < 300){
        count2++;
    }
}
console.log(count2);

// Is there anything we can buy for exactly 125?
for(let d of pdb){
    if(d[1] == 125){
        console.log(true);
        break;
    }
    else if (d[1] < 125){
        for(let d1 of pdb){
            if(d1[1] == (125-d[1]))
                console.log(true);
                break;
        }
    }
}

// What is the cheapest product?
let minValue = Math.min(...pdb.values());
for(let e of pdb){
    if(e[1] == minValue){
        console.log(e[0]);
    }
}
console.log('===================');
//Which products cost less than 201? (just the name)
for(let f of pdb){
    if(f[1] < 201){
        console.log(f[0]);
    }
}

//Which products cost more than 150? (name + price)
for(let g of pdb){
    if(g[1] >= 150){
        console.log(g[0] + ' : ' + g[1]);
    }
}