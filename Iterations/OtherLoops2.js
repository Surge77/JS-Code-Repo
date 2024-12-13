const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

// For in loop iterates objects
for (const key in myObject) {
    //console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming = ["js", "rb", "py", "java", "cpp"]

//The for in loop also works for arrays
//Arrays also have keys which start from 0
for (const key in programming) {
    //console.log(programming[key]);
}

// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India")

//The for...in loop does not work with Map in JavaScript. 
// The for...in loop is designed to iterate over the enumerable properties of objects,
// but Map is not treated as a plain object and does not expose its entries as enumerable properties.

// for (const key in map) {
//     console.log(key);
// }