const name = "Muskan"
const repoCount = 50

//console.log(name + repoCount + "value");
console.log(`my name is ${name} and my repoCount is ${repoCount}`);

const gameName = new String("Muskanhc")
console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.charAt(2));
console.log(gameName.indexOf('s'));

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-6,4)
console.log(anotherString);

const newStringOne = "              Muskan          "
console.log(newStringOne);
console.log(newStringOne.trim());

const URL = "https://Muskan.com/Muskan%20Rahman/"
console.log(URL.replace('%20' , '-'));

console.log(URL.includes('Muskan'));





