//const tinderUser = new Object()
const tinderUser = {}

tinderUser.UserId = "abc",
tinderUser.Email = "mussu@gmail.com"
console.log(tinderUser);

//both the above gives the same output as {}

const regularUser = {
    fullname: {
        userFullname: {
        firstname: "Muskan",
        lastname: "Rahman",
        }
    }
}

console.log(regularUser.fullname);  //acessing entire fullname
console.log(regularUser.fullname.userFullname.firstname); //this will only acess the first name

const obj1 = {1: "a" , 2: "b"}
const obj2 = {3: "c" , 4: "d"}

//const obj3 = {obj1 ,obj2}  //only gives the object doesnt merge them
//const obj3 =  Object.assign({}, obj1 ,obj2)  //{} - this will help in merging the objects

//we can also use the spread syntax for merging the objects

const obj3 = {...obj1 , ...obj2}
console.log(obj3);

const user = [
    {
        id : 1,
        email :"mussu@google.com",

    },
    {
        id : 2,
        email :"mussu@gpt.com",

    }

]  //this showcases multiple objects inside array

console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));


console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty('Email'));
console.log(tinderUser.hasOwnProperty('name'));