//array

const myArr = [0,1,2,3,4,5]
const myHeros = ["Mom" , "Dad"]

const myArr2 = (1,2,3,4)
console.log(myArr2[0]); //undefined came as value because it is not an array

//Array Methods

myArr.push(6)  //adds to the array
console.log(myArr);
myArr.pop()  //removes the last element in the array
console.log(myArr);

myArr.unshift(9)   //adds an element to the start of the array
myArr.shift(9)   //removes the element from the start of the array

console.log(myArr.includes(10)); //checks if 9 is part of array
console.log(myArr.indexOf(19)); // if not present returns -1

const newArr = myArr.join()   //this converts the array to string
console.log(typeof(newArr));

//slice , splice

console.log("A" ,myArr);

const myn1 = myArr.slice(1,3)
console.log(myn1);
console.log("B" , myArr);
