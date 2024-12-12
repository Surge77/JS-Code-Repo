const name = "TEJAS"
const repoCount = 50

// console.log(name + repoCount + " Value");

//Modern syntax of writing variables and string together
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

//new and Modern syntax for declaring a string, gives us more method of string to work on
const gameName = new String('TEJAS-hc-com')

// console.log(gameName[0]); -> for accessing the key value pairs as string is stored as object internally
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase()); -> This operation doesn't change the original string due to the stack memory
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4) 
console.log(newString);

const anotherString = gameName.slice(-8, 4) // -> negative means it starts from end
console.log(anotherString);

const newStringOne = "   TEJAS    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))

console.log(gameName.split('-'));