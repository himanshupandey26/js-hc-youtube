// singleton
// Object.create

// object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "Himanshu",
    "full name": "Himanshu Pandey",
    [mySym]: "mykey1", // symbol key always taken in brackets []
    age: 18,
    location: "Jhansi",
    email: "himanshu@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "himanshu@chatgpt.com"
// Object.freeze(JsUser)  // Does not make any further changes in that obj, simply igonre changes
JsUser.email = "himanshu@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());