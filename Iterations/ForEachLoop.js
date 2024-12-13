const coding = ["js", "ruby", "java", "python", "cpp"]

//forEach loop is a method available for arrays and other iterable collections like Map and Set. 
//It allows you to execute a callback function on each element of the array or collection.

// coding.forEach( function (val){
//     console.log(val);
// } )


// For each method using arrow function
// coding.forEach( (item) => {
//     console.log(item);
// } )

// function printMe(item){
//     console.log(item);
// }

//We can also pass a function directly 
// coding.forEach(printMe)

//There are other parameters in for each method
// coding.forEach( (item, index, arr)=> {
//     console.log(item, index, arr);
// } )


//Array of objects
const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    
    console.log(item.languageName);
} )