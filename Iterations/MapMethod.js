//The map method in JavaScript is a built-in function used to transform each element in an array by applying a specified callback function. 
//It creates and returns a new array containing the results of the transformation, while leaving the original array unchanged.

const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNumers.map( (num) => { return num + 10})

const newNums = myNumers
                .map((num) => num * 10 )
                .map( (num) => num + 1)
                .filter( (num) => num >= 40)

console.log(newNums);