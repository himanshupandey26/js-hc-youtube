const user = {
  username: "himanshu",
  price: 999,

  welcomeMessage: function() {
      console.log(`${this.username} , welcome to website`);
      console.log(this);
      // this => return current object 
      // {
      //   username: 'himanshu',
      //   price: 999,
      //   welcomeMessage: [Function: welcomeMessage]
      // }
  }

}

user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);
/*
Node environment ke andr 'this' refer to empty object, kyuki global ke andr koi context hi nhi hai
Browser ke andr jab engine run karta hai toh global obj ==> window object hai
*/

// function chai(){
//     let username = "himanshu"
//     console.log(this); // this' does NOT refer to empty object
//     console.log(this.username); // undefined, work in obj. but  not in function
// }
// chai()

// const chai = function () {
//     let username = "himanshu"
//     console.log(this); // this' does NOT refer to empty object
//     console.log(this.username);// undefined, work in obj. but  not in function
// }

const chai =  () => {
  let username = "himanshu"
  console.log(this); // this' refer to empty object
}


// chai()

// const addTwo = (num1, num2) => { // Arrow function
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2 // Implicit return

// const addTwo = (num1, num2) => ( num1 + num2 ) // Mostly used in ReactJs

// const addTwo = (num1, num2) => {username: "himanshu"} // Undefined, in care of braces return is needed

const addTwo = (num1, num2) => ({username: "himanshu"})

console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]
// myArray.forEach()
// myArray.forEach(function () {})
// myArray.forEach( ()=>{} )
// myArray.forEach( ()=>() )