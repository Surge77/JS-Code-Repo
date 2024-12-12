const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros) .-> The whole array is push as an element into the marvel_heros

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros) -> Concat returns a new merged array which needs to be stored
// console.log(allHeros);

//(...) -> This is called as spread operator
//The spread operator is used to "unpack" the elements of an array into individual elements.
//Spreads both arrays resulting into merging both arrays
const all_new_heros = [...marvel_heros, ...dc_heros]
// console.log(all_new_heros);


const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

//This method flattens the nested array no matter how much nested it makes it into a single level array
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);


console.log(Array.isArray("Hitesh")) // Returns booleans whether it's array or not
console.log(Array.from("Hitesh")) // Converts the given string into array
console.log(Array.from({name: "hitesh"})) // interesting  , must specify whether to make arrays with keys or values

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); // Returns new arrays from the set of elements