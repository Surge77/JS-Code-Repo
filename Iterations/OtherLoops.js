// for of
//allows you to iterate over iterable objects, such as arrays, strings, maps, sets, and more.

// ["", "", ""] -> array of strings
// [{}, {}, {}] -> array of objects

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    //console.log(num);
}

const greetings = "Hello world!"
for (const greet of greetings) {
    //console.log(`Each char is ${greet}`)
}

// Maps
// stores key-value pairs. Unlike plain objects, Maps allow keys to be of any data type (e.g., objects, functions, primitives) and
//  provide better performance and functionality for certain use cases.
// Maps store unique values and store the data in order

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")


// console.log(map);

// [key,value] -> syntax for printing key values from the map
for (const [key, value] of map) {
    // console.log(key, ':-', value);
}

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

//The for of loop doesn't iterate objects
// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
    
// }

