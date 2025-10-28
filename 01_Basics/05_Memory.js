// stack Memory(It is used for all primitive types)    
// //Heap Memory(It is used for all non -primitive types) -we get reference of orignal values from heap

let myName = "MussuRahmandotcom"

let anotherName = myName
anotherName = "AyushYenkurdotcom"

console.log(myName);
console.log(anotherName);


let userOne = {
    name : "Muskan" ,
    email : "mus724@gmail.com"
}

let userTwo = userOne

userTwo.email = "abc@gmail.com"
console.log(userOne.email);
console.log(userTwo.email);

