//singleton - it is only onetype of its own object

//object liertals - to declare object

const mySym = Symbol("key1")

const JsUser = {
    name : "Muskan",
    "full Name" : "Muskan Rahman",
    [mySym] : "myKey1",   //the symbol syntax needs to be in sqaure brackets for its datatype to be in Symbol
    age : 18,
    location : "Kolkata",
    email : "muskan@google.com",
    lastLoginDays : ["Monday " , "Saturday"]

}

console.log(JsUser.email);
console.log(JsUser["email"]);  //if we give square brackets we need to give double inverted commas to recognise the string
console.log(JsUser["full Name"]);
console.log(JsUser[mySym]);  // it should be in printed in square brackets only
//while printing also we will see symbol coming with symbol keyword eg : Symbol(key1): 'myKey1'
 // we can overwrite the values by "=" symbol 
 
 JsUser.email = "muskan@chatgpt.com"
 //Object.freeze(JsUser)    //freeze will help to never change the value
 JsUser.email = "muskan@gpt.com"
 console.log(JsUser);

 JsUser.greeting = function(){
    console.log("Hello JS User");
 }
 console.log(JsUser.greeting); //if we give like this it will give undefined output
 console.log(JsUser.greeting());  //this will give error as we have freeze the object
 console.log(JsUser.greeting()); // once unfreezed it will give output

JsUser.greetingTwo = function(){
    console.log('Hello JS User, ${this.name}');
}
console.log(JsUser.greetingTwo()); 