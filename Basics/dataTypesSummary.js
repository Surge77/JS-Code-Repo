//  Primitive 

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3


// ***************************************************************************************


//Stack and heap memory =>

// Stack (Primitive)
// Heap (Non Primitive)


//When you assign a primitive value (e.g., myYoutubename) to another variable (anothername), it creates a copy.
//Modifying anothername does not affect myYoutubename because they are stored independently.

let myYoutubename = "HiteshChoudhary"

let anothername = myYoutubename
anothername = "ChaiAurCode"

console.log(myYoutubename)
console.log(anothername)


//When you assign an object (userOne) to another variable (userTwo), it creates a reference to the same memory location.
// Modifying userTwo affects userOne because both reference the same object in the heap.

let userOne = {
    email : "user@gmail.com",
    upi : "user@ybl"
}

let userTwo = userOne

console.log(userOne)
console.log(userTwo)