
/*
//* Problem username is not add in the this object
function SetUserName(userName){
  //* Complex DB calls
  this.userName = userName
  console.log("Called");
  
}

function createUser(userName,email,password){
  SetUserName(userName)

  this.email = email
  this.password = password
}

const user = new createUser("Himanshu","himanshu@google.com","1234")
console.log(user); // createUser { email: 'himanshu@google.com', password: '1234' }
*/

function SetUserName(userName){
  // Complex DB calls
  this.userName = userName
  console.log("Called");
  
}

function createUser(userName,email,password){
  SetUserName.call(this,userName)

  this.email = email
  this.password = password
}

const user = new createUser("Himanshu","himanshu@google.com","1234")
console.log(user); // createUser { userName: 'Himanshu', email: 'himanshu@google.com', password: '1234' }