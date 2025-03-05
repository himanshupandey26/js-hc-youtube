// let myName = "himanshu     "
// let mychannel = "Sinkin     "

// console.log(myName.trueLength);


let myHeros = ["thor", "spiderman"]


let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.himanshu = function(){
    console.log(`himanshu is present in all objects`);
}

Array.prototype.heyHimanshu = function(){
    console.log(`Himanshu says hello`);
}

// heroPower.himanshu()
// myHeros.himanshu()
// myHeros.heyHimanshu()
// heroPower.heyHimanshu()

// inheritance

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "ChaiAurCode     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"himanshu".trueLength()
"iceTea".trueLength()


// Actually javascript ka OOP yaha pe khatam ho gya hai, agge classes ka concept only syntax hai, or cover karne wali baat hai 