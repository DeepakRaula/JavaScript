const myArr = [2,1,4,3]

myArr.sort() // sort method in arrays 

console.log(myArr);

const marvelHeros = ["Iron Man","thor","Spider Man"]
const dcHeroes = ["Super Man","Flash","Bat Man"]

const heroes = marvelHeros.concat(dcHeroes); // merge two arrays

console.log(heroes);

const all_new_heros = [...marvelHeros, ...dcHeroes] // spread operator
console.log(all_new_heros)


const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

let useableAnotherArray = another_array.flat(Infinity)
console.log(useableAnotherArray);

console.log(Array.isArray("Techy")) //false

console.log(Array.from("Hello this is techy"));


console.log(Array.from({name: " Deepak"})) // generates an empty array

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));

