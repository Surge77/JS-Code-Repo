// const tinderUser = new Object() -> singleton object
const tinderUser = {} // Non singleton object

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}

//accessing nested objects
//console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }
// const obj3 = Object.assign({}, obj1, obj2, obj4) -> method used to copy properties from one or more source objects to a target object.


//spreading of objects
const obj3 = {...obj1, ...obj2}
// console.log(obj3);


const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


//Object destructuring 


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor

//Object destructuring is a syntax that allows you to unpack properties from an object into individual variables.
//It's a concise and readable way to extract data from objects.
const {courseInstructor: instructor} = course //The property courseInstructor is being extracted from the course object.
//The value of the courseInstructor property is assigned to a new variable named instructor.
//You can now use instructor as a variable to access the value of course.courseInstructor.

// console.log(courseInstructor);
console.log(instructor);

// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }


//sometimes we get the data from api in the form of arrays inside which objects are present
[
    {},
    {},
    {}
]