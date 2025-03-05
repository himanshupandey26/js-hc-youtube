class User {
  constructor(username){
      this.username = username
  }

  logMe(){
      console.log(`Username: ${this.username}`);
  }

  static createId(){
      return `123`
  }
}

const himanshu = new User("himanshu")
// console.log(himanshu.createId()) // Through error since we are using STATIC keyword 

class Teacher extends User {
  constructor(username, email){
      super(username)
      this.email = email
  }
}

const iphone = new Teacher("iphone", "i@phone.com")
iphone.logMe();
// console.log(iphone.createId()); 