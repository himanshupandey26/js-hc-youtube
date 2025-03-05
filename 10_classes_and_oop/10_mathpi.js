const descripter = Object.getOwnPropertyDescriptor(Math, "PI")

// console.log(descripter);

// console.log(Math.PI);
// Math.PI = 5 // Don't update it
// console.log(Math.PI);

let chai = {
    name: 'ginger chai',
    price: 250,
    isAvailable: true,

    orderChai: function(){
        console.log("chai nhi bni");
    }
}

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

Object.defineProperty(chai, 'name', {
    // writable: false,
    writable: true,
    enumerable: false, // if False, name property is not display or participate in iteration
    
})
console.log(Object.getOwnPropertyDescriptor(chai, "name"));

// chai.name = "Elephant"
// console.log(Object.getOwnPropertyDescriptor(chai, "name"));


for (let [key, value] of Object.entries(chai)) {
    if (typeof value !== 'function') {
        console.log(`${key} : ${value}`);
    }
}