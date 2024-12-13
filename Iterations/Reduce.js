const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// }, 0)

// The reduce method in JavaScript is a built-in function used to accumulate or reduce an array to a single value based on a specified operation (e.g., summing values, multiplying elements, etc.). 
// The method iterates over each element in the array, applying a callback function that "reduces" the elements to one value.
// accumulator: The accumulated result from the previous iteration (or the initialValue in the first iteration).
// currentValue: The current element being processed in the array.
// index (optional): The index of the current element being processed.

const myTotal = myNums.reduce( (acc, curr) => acc+curr, 0)

console.log(myTotal);


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]
