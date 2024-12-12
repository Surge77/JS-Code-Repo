// singleton
//A singleton object refers to an object that is created only once and can be accessed globally throughout the application.
//It ensures that only one instance of the object exists.
// Object.create -> This is the method of creating object through constructor

// object literals
//A literal object is an object created using object literal notation {}.
//It's a concise and straightforward way to define an object with key-value pairs.

const mySym = Symbol("key1") // Declaring a symbol

//Defining a object
const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",
    [mySym]: "mykey1", // To use this value as symbol we use []
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"]) -> if we declare the key as string then will accessing too we need to use string key
// console.log(JsUser[mySym]) -> Accessing using symbol

JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser) -> Makes the object immutable i.e we cannot modify it
JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser);



JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

//The object after adding the method/functions

const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",
    [mySym]: "mykey1", // To use this value as symbol we use []
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"],
    
    // Methods added to the object
    greeting: function() {
        console.log("Hello JS user");
    },
    greetingTwo: function() {
        console.log(`Hello JS user, ${this.name}`);
    }
};
