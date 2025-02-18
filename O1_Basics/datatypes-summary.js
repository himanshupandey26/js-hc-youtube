// How we store or retrive, based on this datatype classified into two type officialy
// Primitive and Non-Primitive or Referenced type

//  Primitive : call by value type, original referenced is not share while coping

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
// console.log(id);
// console.log(id === anotherId);

const bigNumber = 3456543576654356754n // n signify it as a Big Int
// console.log(typeof bigNumber);



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}
// console.log(typeof myFunction); // Function Object

// console.log(typeof anotherId);



// https://262.ecma-international.org/5.1/#sec-11.4.3
/*
Table 20 — typeof Operator Results

Typeof val   	Result

Undefined 	  "undefined"
Null        	"object"
Boolean     	"boolean"
Number 	      "number"
String 	      "string"
Object (native and does not implement [[Call]])     	"object"
Object (native or host and does implement [[Call]]) 	"function"
Object (host and does not implement [[Call]]) 	       Implementation-defined except may not be "undefined", "boolean", "number", or "string".
*/


/* 
JavaScript is a dynamically typed language. This means that the type of a variable is checked during runtime, as opposed to static typing where types are checked during compilation. In JavaScript, a variable can hold values of different types throughout its lifespan in the program. There is no need to explicitly declare the data type of a variable. The interpreter assigns a type to the variable at runtime based on its current value.
*/

// const score:Number = 100 // Typescript, datatype mention karna hota hai
