
function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("M");
    console.log("A");
    console.log("N");
    console.log("S");
    console.log("H");
    console.log("U");
}

// sayMyName()   // sayMyName is a reference and sayMyName() is execution


// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){
    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3, 5)

// console.log("Result: ", result);

// function loginUserMessage(username){
function loginUserMessage(username = "sam"){ // default value
    if(!username){ //(username === undefined) bhi use kar skte h
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("hitesh"))
// console.log(loginUserMessage("hitesh"))

// ... is rest operator or spread operator based on their use case which is used (rest/spread)
// function calculateCartPrice(...num1){ // ... is rest operator, return array of all argument pass
//     return num1
// }
function calculateCartPrice(val1, val2, ...num1){ // ... is rest operator, return array of  all  argument pass starting from 3 argument, since 1 arg to val1 and 2 arg to val2
    return num1
} 
// console.log(calculateCartPrice(200, 400, 500, 2000))

const user = {
    username: "himanshu",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));