var books = new Map([
    ['978-1-60309-452-8', 'A Letter to Jo'],
    ['978-1-60309-459-7', 'Lupus'],
    ['978-1-60309-444-3', 'Red Panda and Moon Bear'],
    ['978-1-60309-461-0', 'The Lab']
]);

//Print all the key-value pairs
books.forEach(function(value, key){
    console.log(`${value} (ISBN: ${key})`);
})

//Remove the key-value pair with key 978-1-60309-444-3
books.delete('978-1-60309-444-3');

//Remove the key-value pair with value The Lab
for(let ele of books){
    if(ele[1] === 'The Lab'){
        books.delete(ele[0]);
        break;
    }
}

//Add the following key-value pairs to the map
books.set('978-1-60309-450-4','They Called Us Enemy');
books.set('978-1-60309-453-5','Why Did We Trust Him?');

//Print whether there is an associated value with key 478-0-61159-424-8 or not
console.log(books.has('478-0-61159-424-8'));

//Print the value associated with key 978-1-60309-453-5
console.log(books.get('978-1-60309-453-5'));

/*
books.forEach(function(value, key){
    console.log(`${value} (ISBN: ${key})`);
})
*/