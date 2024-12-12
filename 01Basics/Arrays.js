// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

// Another way of creating an array
const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

// Array methods

// myArr.push(6) -> adding element to last
// myArr.push(7) -> removing the last element 
// myArr.pop()

// myArr.unshift(9) -> Adds element at the start of the array
// myArr.shift() -> removes the first element in the array

// console.log(myArr.includes(9)); -> returns boolean if value exists or not
// console.log(myArr.indexOf(3)); -> returns -1 if the index of the number doesn't exists

// const newArr = myArr.join() -> joins the array and converts into string

// console.log(myArr);
// console.log( newArr);


// slice, splice

console.log("A ", myArr); 

//Extracts a portion of an array without modifying the original array.
const myn1 = myArr.slice(1, 3) 

console.log(myn1);
console.log("B ", myArr);

//Adds, removes, or replaces elements in an array and modifies the original array.
const myn2 = myArr.splice(1, 3) // Removes 3 elements starting from index 1 of myArr and returns the removed elements.
console.log("C ", myArr);
console.log(myn2); //Printing the removed elements returns by the splice