// Here are the 6 falsy values in JavaScript:

// false
// 0 (the number zero)
// "" (empty string, single or double quotes)
// null
// undefined
// NaN (Not-a-Number)
// false, 0, -0, BigInt 0n, "", null, undefined, NaN


// Examples of truthy values:

// Non-zero numbers (e.g., 1, -1, 3.14)
// Non-empty strings (e.g., "hello", " ")
// Objects (e.g., {}, [])
// true
// "0", 'false', " ", [], {}, function(){}

const userEmail = []

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}


// if (userEmail.length === 0) {
//     console.log("Array is empty");
// }

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}

// Nullish Coalescing Operator (??): null undefined
// way to handle default values when dealing with null or undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20


console.log(val1);

// Terniary Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")