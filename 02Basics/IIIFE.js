// Immediately Invoked Function Expressions (IIFE)

//An IIFE consists of two parts:

// A function definition wrapped in parentheses.
// An invocation of the function right after the definition.


//When we want the function to be immediately executed or invoked
(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();
//Sometimes we need to end the function with a semi colon it can cause erros


//Using arrow function
( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('TEJAS') // -> The arguments are being passed here


//Why Use IIFEs?
//Avoid Polluting the Global Namespace
//Private Scopes