const hero1 = ["Bat" , "Cat " , "Rat"]
const hero2 = ["Apple" , "Banana" , "Lime"];

//hero1.push(hero2) // it includes the array as an array not object
allHeros = hero1.concat(hero2) // merges the array as an object but gives a new array
console.log(allHeros);

const allNewHeros =[...hero1, ...hero2] //a new way to merge arrays
console.log(allNewHeros);

const another_arr = [1,2,3,[4,5,6],7,[[6,7],[4,5]]]
const real_arr = another_arr.flat(Infinity)
console.log(real_arr);

console.log(Array.isArray("Hitesh"));
console.log(Array.from("Hitesh"));

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1 , score2 , score3));



