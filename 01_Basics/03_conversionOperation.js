let score = "Himanshu";
// console.log(typeof score);
let scoreNumber = Number(score);
// console.log(typeof(scoreNumber));
// console.log(scoreNumber);

// "" => 0
// "33" => 33
// "33abc" => NaN
//  true => 1; false => 0
//  null => 0
// undefined => NaN


let isLoggedIn = 0.0
let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(typeof booleanIsLoggedIn);
// console.log(booleanIsLoggedIn);

// 32 => true
// 1 => true; 0 => false
// 0.0=> false
// "" => false
// null => false
// undefined => false
// "hitesh" => true


let someValue = 34
let stringValue = String(someValue)
// console.log(stringValue);
// console.log(typeof stringValue);



// *********************** Operations ***********************

let value = 3
let negValue = -value
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

let str1 = "hello"
let str2 = " hitesh"

let str3 = str1 + str2
// console.log(str3);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");

// console.log( (3 + 4) * 5 % 3);

// console.log(+true);
// console.log(+"");

let num1, num2, num3

num1 = num2 = num3 = 2 + 2

let gameCounter = 100
++gameCounter; // prefix
gameCounter++ // postfix
console.log(gameCounter);

let x = 3;
const y = x++;

console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

let a = 3;
const b = ++a;

console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"

// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion
