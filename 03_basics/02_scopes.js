// if(true){
//   let a = 10;
//   const b = 20;
//   var c = 30;
// }
// console.log(a); // Reference Error:  Cannot access 'a' before initialization
// console.log(b); // Reference Error:  Cannot access 'a' before initialization
// console.log(c); // print value of c


// var c = 300;
// if(true){
//   let a = 10;
//   const b = 20;
//   // var c = 30; // var c = 30 ya c = 30 
//   c = 30
// }
// console.log(c); // Out of scope, not print 300 but new assign value 30



//var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a); // Inner: 10
}
// console.log(a); // 300

// {} with if-else, function is called its scope (scope of that program ), but in object it called obj declaration

// console.log(a);
// console.log(b);
// console.log(c);



// chhote bade logo se ice-cream le skte hai
// lekin bade chhoto ice-cream nhi le skte hai
function one(){
    const username = "himanshu"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website); // Create reference error

    two()

}

// one()

if (true) {
    const username = "himanshu"
    if (username === "himanshu") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

 // console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++


// console.log(addone(5))
function addone(num){
    return num + 1
}


// addTwo(5) // Can't access through error
const addTwo = function(num){ // variable sometimes called expression, Method is known as Hosting
    return num + 2
}