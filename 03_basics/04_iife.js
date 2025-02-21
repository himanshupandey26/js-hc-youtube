// Immediately Invoked Function Expressions (IIFE)

// JavaScript functions that are executed immediately after they are defined.
// They are typically used to create a local scope for variables to prevent them from polluting the global scope.


// (function chai(){
//   // named IIFE
//   console.log(`DB CONNECTED`);
// })()

// Through error
// ( (name) => {
//   console.log(`DB CONNECTED TWO ${name}`);
// } )('himanshu')
// Immediately invoked func. invoke toh hua but isko pta nhi context rokhna kaha h 
// In this situation in js, we have to end it by using ; at end


(function chai(){
  // named IIFE
  console.log(`DB CONNECTED`);
})();
// NOT through error, due to collin

// (() => {
//   console.log(`DB CONNECTED TWO`);
// })()

( (name) => {
  // simple IIFE
  console.log(`DB CONNECTED TWO ${name}`);
} )('himanshu')