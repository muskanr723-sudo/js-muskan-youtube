function sayMyName(){
    console.log("M");
    console.log("U");
    console.log("S");
    console.log("S");
    console.log("U");
}

// sayMyName()

function addTwoNumbers(number1 , number2){
    console.log(number1 + number2); // console.log will not work here

    let result = number1 +number2
    return result
}

const result = addTwoNumbers(2,3)
console.log("Result:" , result);

function loginUserMessage(username){
    if (username === undefined){    //or we can also write if(!username)
        console.log("Please enter a username");
        return     //this will help to not print the lower values if the return is undefined
    }
    return `${username} just logged in`
}
    console.log(loginUserMessage("Muskan"))

    function calculateCarPrice(...num1){
        return num1
    }
    console.log(calculateCarPrice(200,300,400,1000));


    
    function calculatePrice(val1 , val2 , ...num2){
        return num2
    }
    console.log(calculatePrice(200,300,400,1000));

    const user = {
        name : "Muskan",
        prices : 99
    }

function handleObject(anyobject){

      console.log(`Username is ${anyobject.name} and price is ${anyobject.prices}`)


}
handleObject(user)

const myNewArray = [200 , 300 , 400]
 function returnArray(getArray){
    return(getArray[1])
 } 
 
 console.log(returnArray(myNewArray));