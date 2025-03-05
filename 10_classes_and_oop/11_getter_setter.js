class User {
  constructor(email, password){
      this.email = email;
      this.password = password
  }

  get email(){
      return this._email.toUpperCase()
  } // if we define getter then we also have to define setter otherwise it will through error
  set email(value){
      this._email = value
  }

  get password(){
      return `${this._password}himanshu`
  }

  set password(value){
      this._password = value
  }
}

const himanshu = new User("h@himanshu.ai", "abc")
console.log(himanshu);